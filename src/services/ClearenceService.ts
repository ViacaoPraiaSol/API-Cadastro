import { ModelStatic } from "sequelize";
import ClearanceLevel from "../database/models/ClearanceLevel";
import resp from "../utils/resp";
import iClearanceLevel from "../database/interfaces/iClearanceLevel";
import schema from "./validations/schema";


class ClearanceService {
  private model: ModelStatic<ClearanceLevel> = ClearanceLevel

  async get(levelId?: string) {
    if(levelId) {
      const level = await this.model.findByPk(levelId)
      if (!level) {
        return resp (404, { error: 'Nível de Acesso não encontrado!' })
      }
      return resp(200, level)
    }
    return resp(202, await this.model.findAll())
  }

  async create(clearanceLevel: iClearanceLevel){
    const { error } = schema.clearanceLevel.validate(clearanceLevel)

    const createClearance = await this.model.create({ ...clearanceLevel})

    return resp(201, createClearance)
  }

  async delete(levelId: string) {
    const level = await this.model.findByPk(levelId)

    if (!level) {
      return resp (404, { error: 'Nível de Acesso não encontrado!' })
    }
    await level.destroy()
    return resp(202, { message: 'Nível de Acesso excluido com sucesso!' })
  }
}

export default ClearanceService