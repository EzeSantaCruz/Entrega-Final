import express from 'express'
import { createUser, getUserController, getUserByIdController, deleteUserController, LoginController  } from '../controllers/UserController.js'
import { tokenValidoMiddleware } from '../middlewares/tokenValidoMiddleware.js'
export const userRouter = express.Router()

userRouter.post("/crear", createUser)
userRouter.get("/", tokenValidoMiddleware, getUserController)
userRouter.get("/:id", tokenValidoMiddleware, getUserByIdController)
userRouter.delete("/delete/:id", tokenValidoMiddleware, deleteUserController)
userRouter.post("/login", LoginController)