import express from "express";
import { crearOrdenController, getOrdenesController, deleteOrdenesController, updateOrdenesController, getOrdenesByIdController } from "../controllers/orderController.js";
import { tokenValidoMiddleware } from '../middlewares/tokenValidoMiddleware.js'


export const ordenRouter = express.Router()

ordenRouter.post("/crear", tokenValidoMiddleware, crearOrdenController)
ordenRouter.get("/", tokenValidoMiddleware, getOrdenesController)
ordenRouter.delete("/delete/:id", tokenValidoMiddleware, deleteOrdenesController)
ordenRouter.patch("/update/:id", tokenValidoMiddleware, updateOrdenesController)
ordenRouter.get("/:id", tokenValidoMiddleware, getOrdenesByIdController)