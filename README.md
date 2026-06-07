# Backend Assessment

**Roll Number:** 2023002908

## Overview

This is a backend assessment submission demonstrating:
- **Reusable Logging Middleware** for centralized log management
- **Vehicle Maintenance Scheduler** that optimizes vehicle maintenance based on available mechanic hours
- **Notification System Design** with comprehensive stage-by-stage analysis

## Modules

### Logging Middleware

Located in: `logging_middleware/`

Reusable middleware that sends structured logs to the evaluation server. Supports different log levels (info, error, warning, etc.) and log stacks.

**Setup:**
```bash
cd logging_middleware
npm install
```

**API:**
```javascript
const Log = require("./logger");

await Log(
  "backend",        // stack
  "info",           // level
  "service",        // package name
  "Your message"    // message
);
```

### Vehicle Maintenance Scheduler

Located in: `vehicle_maintenance_scheduler/`

Fetches depots and vehicles from evaluation APIs and determines optimal maintenance schedules based on available mechanic hours per depot.

**Algorithm:** Uses a greedy ratio-based approach:
- Ratio = Impact / Duration
- Sorts vehicles by ratio (descending)
- Selects vehicles greedily while respecting mechanic hour constraints
- Maximizes total impact within resource constraints

**Setup:**
```bash
cd vehicle_maintenance_scheduler
npm install
```

**Run:**
```bash
node server.js
```

Server starts on `http://localhost:5000`

**Endpoints:**

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/schedule` | Get optimized maintenance schedules for all depots |

**Response:**
```json
[
  {
    "depotId": "D001",
    "mechanicHours": 100,
    "selectedVehicles": 5,
    "totalImpact": 250
  }
]
```

### Notification System Design

Located in: `notification_system_design.md`

Contains detailed Stage 1-5 design analysis covering:
- **Stage 1:** System Architecture & Design
- **Stage 2:** Database Indexing Strategy
- **Stage 3:** Scaling Approach
- **Stage 4:** Performance Optimization
- **Stage 5:** Failure Handling & Recovery

## Project Structure

```
2023002908/
├── logging_middleware/
│   ├── logger.js
│   ├── package.json
│   └── package-lock.json
├── vehicle_maintenance_scheduler/
│   ├── api.js
│   ├── scheduler.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
├── notification_system_design.md
├── .gitignore
└── README.md
```

## Testing Checklist

Before submission, verify:

### 1. Logging Middleware
```bash
curl -X POST http://localhost:5000/logs \
  -H "Content-Type: application/json" \
  -d '{"stack":"backend","level":"info","package":"service","message":"test"}'
```
Expected response:
```json
{
  "message": "log created successfully"
}
```

### 2. Depots
```bash
curl http://localhost:5000/depots
```
Should return depot data.

### 3. Vehicles
```bash
curl http://localhost:5000/vehicles
```
Should return vehicle data.

### 4. Scheduler
```bash
curl http://localhost:5000/schedule
```
Should return optimized maintenance schedules with selected vehicles and total impact.

## Implementation Highlights

✅ **Logging Middleware:** Reusable, exported as a module  
✅ **Error Handling:** Comprehensive try-catch with logging  
✅ **API Integration:** Uses Bearer token authentication  
✅ **Optimization:** Greedy algorithm for vehicle selection  
✅ **Code Organization:** Clean separation of concerns  

## Notes

- All sensitive tokens are stored in environment variables (credentials handled securely)
- The scheduler uses a greedy approach; a dynamic programming (0/1 knapsack) solution would provide optimal results but trades off complexity for a near-optimal solution
- Logging is integrated throughout the request lifecycle for observability

---

**Submission Date:** 2026-06-07
