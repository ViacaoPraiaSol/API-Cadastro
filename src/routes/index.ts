import { Router } from "express";
import companyRouter from "./CompanyRouter";
import userRouter from "./UserRouter";

const router = Router();
router.use(companyRouter);
router.use(userRouter);


export default router;