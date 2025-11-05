import express from 'express'
import { crearProductoController, getProductosController, getProductoIdController, deleteProductController, updateProductController } from '../controllers/productosController.js'
import { tokenValidoMiddleware } from '../middlewares/tokenValidoMiddleware.js'
export const productoRouter = express.Router()

productoRouter.post("/crear", tokenValidoMiddleware,crearProductoController)
productoRouter.get("/", tokenValidoMiddleware, getProductosController)
productoRouter.get("/:id", tokenValidoMiddleware, getProductoIdController)
productoRouter.delete("/delete/:id", tokenValidoMiddleware, deleteProductController)
productoRouter.patch("/update/:id", tokenValidoMiddleware, updateProductController)