import { Router } from "express";
import UserController from "../controller/UserController";

const controller = new UserController();
const userRouter = Router();

userRouter.get('/usuario', controller.searchUser.bind(controller));

export default userRouter;