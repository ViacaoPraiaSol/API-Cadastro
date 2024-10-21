import { ModelStatic } from "sequelize";
import User from "../database/models/User";
import Response from "../utils/Response";
import IUser from "../database/interfaces/IUser";

class UserService {
  private model: ModelStatic<User> = User;

  async getUser(userId?: string){
    if(userId){
      const user = await this.model.findByPk(userId);
      if(!user) {;
        return Response(403, { error: 'Usuário não encontrado!'})
      }
      return Response(200, user);
    }
    return Response(202, await this.model.findAll());
  }

  async searchUser(user: IUser){
    const { userId, userName, email, clearance} = user;
    if(user){
      const users = await this.model.findAll({where:{...user}});
      if(!users) {
        return Response(403, { error: 'Nenhum usuário encontrado!'});
      }
      return Response(200, users);
    }
  }
}

export default UserService;