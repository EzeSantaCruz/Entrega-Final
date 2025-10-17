import express from 'express'
import { createUser, getUserController } from '../controllers/UserController.js'

export const userRouter = express.Router()

userRouter.post("/crear", createUser)
userRouter.get("/", getUserController)