import express from "express";
import { crearOrdenController } from "../controllers/oderController.js";



export const ordenRouter = express.Router()

ordenRouter.post("/crear",crearOrdenController)