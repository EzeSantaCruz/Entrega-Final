import express from "express";
import { crearOrdenController, getOrdenesController } from "../controllers/oderController.js";



export const ordenRouter = express.Router()

ordenRouter.post("/crear",crearOrdenController)
ordenRouter.get("/", getOrdenesController)