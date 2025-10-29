import express from 'express'
import { updateStockController, adjustStockController } from '../controllers/stockController.js'

export const stockRouter = express.Router()

stockRouter.patch('/update/:id', updateStockController)

stockRouter.post('/adjust/:id', adjustStockController)

