import express from 'express'
import { crearCategoriaController, getCategoriasController, deleteCatController } from '../controllers/categoriaController.js'


export const categoriaRouter = express.Router()


categoriaRouter.post("/crear", crearCategoriaController)
categoriaRouter.get("/", getCategoriasController)
categoriaRouter.delete("/delete/:id", deleteCatController)