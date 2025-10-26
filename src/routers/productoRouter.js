import express from 'express'
import { crearProductoController, getProductosController } from '../controllers/productosController.js'

export const productoRouter = express.Router()

productoRouter.post("/crear", crearProductoController)
productoRouter.get("/", getProductosController)
