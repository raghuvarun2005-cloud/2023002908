const express = require("express");
const Log = require("../logging_middleware/logger");

const { getDepots, getVehicles } =
require("./api");

const optimizeVehicles =
require("./scheduler");

const app = express();

app.get("/schedule", async (req, res) => {

  try {

    const depots =
      await getDepots();

    const vehicles =
      await getVehicles();

    const result = depots.map(
      depot => {

        const optimized =
          optimizeVehicles(
            vehicles,
            depot.MechanicHours
          );

        return {
          depotId: depot.ID,
          mechanicHours:
            depot.MechanicHours,
          selectedVehicles:
            optimized.selected.length,
          totalImpact:
            optimized.totalImpact
        };
      }
    );

    res.json(result);

  } catch (error) {

    await Log(
      "backend",
      "error",
      "service",
      error.message
    );

    res.status(500).json({
      error: error.message
    });
  }
});

app.listen(5000, () => {
  console.log(
    "Scheduler Running"
  );
});