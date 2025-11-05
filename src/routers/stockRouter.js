import express from 'express'
import { updateStockController, adjustStockController } from '../controllers/stockController.js'
import { tokenValidoMiddleware } from '../middlewares/tokenValidoMiddleware.js'

export const stockRouter = express.Router()

stockRouter.patch('/update/:id', tokenValidoMiddleware, updateStockController)

stockRouter.post('/adjust/:id', tokenValidoMiddleware, adjustStockController)

