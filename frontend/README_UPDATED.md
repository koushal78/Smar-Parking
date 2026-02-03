# Smart Parking Lot System

This is a full-stack web application that manages a parking lot and automatically allocates parking slots based on vehicle requirements.  
The system is designed to demonstrate backend logic, filtering and optimization, database usage, and a simple usable UI.

---

## Project Overview

The Smart Parking Lot System acts like a parking manager.  
It keeps track of all parking slots, their features, and their availability, and decides where a vehicle should be parked.

Each parking slot has:
- A slot number
- Whether it is covered or not
- Whether it supports EV charging or not
- Whether it is currently occupied

The system ensures that vehicles are parked in the most suitable and nearest available slot.

---

## How the Project Works

### 1. Adding Parking Slots
Users can add parking slots by providing:
- Slot number
- Covered parking availability
- EV charging availability

Each slot is stored in the database with its occupied status set to false by default.  
Duplicate slot numbers are not allowed.

---

### 2. Viewing All Parking Slots
All parking slots are displayed in a list/table showing:
- Slot number
- Covered or not
- EV charging or not
- Current status (Available or Occupied)

This gives a complete overview of the parking lot at any time.

---

### 3. Parking a Vehicle
When a user wants to park a vehicle, they specify:
- Whether the vehicle needs EV charging
- Whether the vehicle needs covered parking

The backend performs the following steps:
1. Filters all parking slots that are not occupied
2. Applies the required conditions (EV and/or covered)
3. Sorts the matching slots by slot number
4. Selects the nearest slot (lowest slot number)
5. Marks the selected slot as occupied

If no slot satisfies the requirements, the system returns a message saying that no slot is available.

---

### 4. Removing a Vehicle
Users can remove a vehicle by entering the slot number.  
The system:
- Checks if the slot exists
- Checks if the slot is currently occupied
- Marks the slot as available again

Appropriate error messages are shown for invalid cases.

---

## Data Model

Each parking slot follows this structure:

```json
{
  "slotNo": 1,
  "isCovered": true,
  "isEVCharging": false,
  "isOccupied": false
}
```

---

## Commands ✅

Quick commands to run the project:

- Install dependencies (root):
  - `npm install`
- Install frontend dependencies:
  - `cd frontend && npm install`
- Start backend (from project root):
  - `npm run start`  # uses nodemon to run `backend/index.js`
- Start frontend dev server (from project root):
  - `cd frontend && npm run dev`
- Build frontend for production:
  - `cd frontend && npm run build`
- Preview production build:
  - `cd frontend && npm run preview`
- Lint frontend:
  - `cd frontend && npm run lint`

> Note: Run backend and frontend in separate terminals (one for `npm run start`, another for `npm run dev`).

---

## UI Screenshot 📸

A UI screenshot has been added to the public folder as `frontend/public/img1.png`.
When the frontend dev server is running (default: http://localhost:5173), you can view it at:

`http://localhost:5173/img1.png`

---
