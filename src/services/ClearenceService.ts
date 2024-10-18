import { ModelStatic } from "sequelize";
import ClearanceLevel from "../database/models/ClearanceLevel";
import RESPONSE from "../utils/Response";
import ClearanceInterface from "../database/interfaces/ClearanceInterface";
import Validation from "./validations/ValidationSchema";


class ClearanceService {
  private model: ModelStatic<ClearanceLevel> = ClearanceLevel;

  async get(levelId?: string) {
    if(levelId) {
      const level = await this.model.findByPk(levelId);
      if (!level) {
        return RESPONSE(404, { error: 'Nível de Acesso não encontrado!' });
      }
      return RESPONSE(200, level);
    }
    return RESPONSE(202, await this.model.findAll());
  }

  async create(clearanceLevel: ClearanceInterface){
    const { error } = Validation.ClearanceValidation.validate(clearanceLevel);

    const createClearance = await this.model.create({ ...clearanceLevel});

    return RESPONSE(201, createClearance);
  }

  async delete(levelId: string) {
    const level = await this.model.findByPk(levelId);

    if (!level) {
      return RESPONSE (404, { error: 'Nível de Acesso não encontrado!' });
    }
    await level.destroy();
    return RESPONSE(202, { message: 'Nível de Acesso excluido com sucesso!' });
  }
}

export default ClearanceService;