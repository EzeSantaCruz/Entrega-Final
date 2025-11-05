import express from 'express'
import { crearCategoriaController, getCategoriasController, deleteCatController, updateCategoriaController } from '../controllers/categoriaController.js'
import { tokenValidoMiddleware } from '../middlewares/tokenValidoMiddleware.js'

export const categoriaRouter = express.Router()


categoriaRouter.post("/crear", tokenValidoMiddleware, crearCategoriaController)
categoriaRouter.get("/", tokenValidoMiddleware, getCategoriasController)
categoriaRouter.delete("/delete/:id", tokenValidoMiddleware, deleteCatController)
categoriaRouter.patch("/update/:id", tokenValidoMiddleware, updateCategoriaController)