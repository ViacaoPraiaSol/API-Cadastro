
import { NextFunction, Request, Response } from "express";
import CompanyService from "../services/CompanyService";

class CompanyController {
  private service = new CompanyService();

  async getCompany(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.body;
      const { status, message } = await this.service.getCompany(id);
      res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }

  async createCompany(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, message } = await this.service.createCompany(req.body);
      res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }

  async deleteCompany(req: Request, res: Response, next: NextFunction) {
    try {
      
    } catch (error) {
      
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {     
            
    } catch (error) {
      next(error);
    }
  }
}

export default CompanyController;