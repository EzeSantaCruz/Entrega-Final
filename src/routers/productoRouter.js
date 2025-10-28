import express from 'express'
import { crearProductoController, getProductosController, getProductoIdController, deleteProductController } from '../controllers/productosController.js'

export const productoRouter = express.Router()

productoRouter.post("/crear", crearProductoController)
productoRouter.get("/", getProductosController)
productoRouter.get("/:id", getProductoIdController)
productoRouter.delete("/delete/:id", deleteProductController)