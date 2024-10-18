import { ModelStatic } from "sequelize";
import Company from "../database/models/Company";
import RESPONSE from "../utils/Response";
import Validation from "./validations/ValidationSchema";

class CompanyService {
  private model: ModelStatic<Company> = Company;

  async getCompany(companyId?: string){
    if(companyId){
      const company = await this.model.findByPk(companyId);
      if(!company) {
        return RESPONSE(404, { error: 'Empresa não Encontrada!'});
      }
      return RESPONSE(200, company);
    }
    return RESPONSE(202, await this.model.findAll());
  }

  async createCompany(company: Company){
    const { error } = Validation.Company.validate(company);

    const createCompany = await this.model.create({ ...company});

    return RESPONSE(201, createCompany)
  }

  async deleteCompany(companyId: string) {
    const company = await this.model.findByPk(companyId);

    if(!company) {
      return RESPONSE(404, {error: 'Empresa não Encontrada!'});
    }
    await company.destroy();
    return RESPONSE(202, { message: 'Empresa excluida com sucesso!'})
  }
}

export default CompanyService;