import express from "express";
import { crearOrdenController, getOrdenesController, deleteOrdenesController } from "../controllers/oderController.js";



export const ordenRouter = express.Router()

ordenRouter.post("/crear",crearOrdenController)
ordenRouter.get("/", getOrdenesController)
ordenRouter.delete("/delete/:id", deleteOrdenesController)