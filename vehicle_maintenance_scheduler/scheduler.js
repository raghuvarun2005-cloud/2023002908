function optimizeVehicles(vehicles, availableHours) {

  vehicles.sort((a, b) => {
    return (b.Impact / b.Duration) -
           (a.Impact / a.Duration);
  });

  let selected = [];
  let usedHours = 0;
  let totalImpact = 0;

  for (const vehicle of vehicles) {

    if (
      usedHours + vehicle.Duration <=
      availableHours
    ) {

      selected.push(vehicle);

      usedHours += vehicle.Duration;

      totalImpact += vehicle.Impact;
    }
  }

  return {
    selected,
    usedHours,
    totalImpact
  };
}

module.exports = optimizeVehicles;