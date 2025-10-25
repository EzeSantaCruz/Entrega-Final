import express from 'express'
import { crearProductoController } from '../controllers/productosController.js'

export const productoRouter = express.Router()

productoRouter.post("/crear", crearProductoController)
