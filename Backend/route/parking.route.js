import express from "express"
import { AddParkingSlote, ParkVehical, removeVehical, viewParking } from "../controller/parking.controller.js"

const route = express.Router()

route.post("/addSlot",AddParkingSlote)
route.get("/viewSlot",viewParking)
route.post("/parkVehical",ParkVehical)
route.post("/removeVehical",removeVehical)


export default route