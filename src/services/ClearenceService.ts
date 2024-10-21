import { ModelStatic } from "sequelize";
import ClearanceLevel from "../database/models/ClearanceLevel";
import Response from "../utils/Response";
import ClearanceInterface from "../database/interfaces/IClearanceLevel";
import Validation from "./validations/ValidationSchema";


class ClearanceService {
  private model: ModelStatic<ClearanceLevel> = ClearanceLevel;

  async get(levelId?: string) {
    if(levelId) {
      const level = await this.model.findByPk(levelId);
      if (!level) {
        return Response(404, { error: 'Nível de Acesso não encontrado!' });
      }
      return Response(200, level);
    }
    return Response(202, await this.model.findAll());
  }

  async create(clearanceLevel: ClearanceInterface){
    const { error } = Validation.ClearanceValidation.validate(clearanceLevel);

    const createClearance = await this.model.create({ ...clearanceLevel});

    return Response(201, createClearance);
  }

  async delete(levelId: string) {
    const level = await this.model.findByPk(levelId);

    if (!level) {
      return Response (404, { error: 'Nível de Acesso não encontrado!' });
    }
    await level.destroy();
    return Response(202, { message: 'Nível de Acesso excluido com sucesso!' });
  }
}

export default ClearanceService;