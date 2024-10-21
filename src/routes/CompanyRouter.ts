import { Router } from "express";
import CompanyController from "../controller/CompanyController";

const controller = new CompanyController();
const companyRouter = Router();

companyRouter.get('/empresa', controller.getCompany.bind(controller));
companyRouter.post('/empresa', controller.createCompany.bind(controller));
companyRouter.delete('/empresa', controller.deleteCompany.bind(controller));

export default companyRouter;