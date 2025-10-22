import express from 'express'
import { createUser, getUserController, getUserByIdController,deleteUserController } from '../controllers/UserController.js'

export const userRouter = express.Router()

userRouter.post("/crear", createUser)
userRouter.get("/", getUserController)
userRouter.get("/:id", getUserByIdController)
userRouter.delete("/delete/:id", deleteUserController)
