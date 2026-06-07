const axios = require("axios");
const Log = require("../logging_middleware/logger");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJyamlua2FAZ2l0YW0uaW4iLCJleHAiOjE3ODA4MTU5MzQsImlhdCI6MTc4MDgxNTAzNCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImM3ODIyN2ZmLWE3NDYtNDRmZC05MGQyLTYwZGNiZDc2ZWE0NiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImppbmthIHJhZ2h1IHZhcnVuIiwic3ViIjoiNDQxYTRmOTktZGUyOS00YzIwLTk2YTQtMjhhODIyNmI4MTYwIn0sImVtYWlsIjoicmppbmthQGdpdGFtLmluIiwibmFtZSI6ImppbmthIHJhZ2h1IHZhcnVuIiwicm9sbE5vIjoiMjAyMzAwMjkwOCIsImFjY2Vzc0NvZGUiOiJ3Z0t0Z1oiLCJjbGllbnRJRCI6IjQ0MWE0Zjk5LWRlMjktNGMyMC05NmE0LTI4YTgyMjZiODE2MCIsImNsaWVudFNlY3JldCI6Ik1DR3d0bk1udnFRYWJCanoifQ.FwdCIzFG_BE83Cpm6WDVjYeYktm0cRnCk7pSSTHyJFA";

const headers = {
  Authorization: `Bearer ${TOKEN}`
};

async function getDepots() {
  await Log(
    "backend",
    "info",
    "service",
    "Fetching depots"
  );

  const response = await axios.get(
    "http://4.224.186.213/evaluation-service/depots",
    { headers }
  );

  return response.data.depots;
}

async function getVehicles() {
  await Log(
    "backend",
    "info",
    "service",
    "Fetching vehicles"
  );

  const response = await axios.get(
    "http://4.224.186.213/evaluation-service/vehicles",
    { headers }
  );

  return response.data.vehicles;
}

module.exports = {
  getDepots,
  getVehicles
};