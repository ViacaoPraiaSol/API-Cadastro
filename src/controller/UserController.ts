import { NextFunction, Request, Response } from "express";
import UserService from "../services/UserService";
import IUser from "../database/interfaces/IUser";



class UserController {
  private service = new UserService();

  async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.body;
      const { status, message } = await this.service.getUser(id);
      res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }

  async searchUser(req: Request, res: Response, next: NextFunction) {
    try {
      
      const { status, message} = await this.service.searchUser(req.body);
      res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;