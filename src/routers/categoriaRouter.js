import express from 'express'
import { crearCategoriaController } from '../controllers/categoriaController.js'


export const categoriaRouter = express.Router()


categoriaRouter.post("/crear", crearCategoriaController)