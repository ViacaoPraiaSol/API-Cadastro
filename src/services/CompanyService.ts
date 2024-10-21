import { ModelStatic } from "sequelize";
import Company from "../database/models/Company";
import Response from "../utils/Response";
import Validation from "./validations/ValidationSchema";

class CompanyService {
  private model: ModelStatic<Company> = Company;

  async getCompany(companyId?: string){
    if(companyId){
      const company = await this.model.findByPk(companyId);
      if(!company) {
        return Response(403, { error: 'Empresa não Encontrada!'});
      }
      return Response(200, company);
    }
    return Response(202, await this.model.findAll());
  }

  async createCompany(company: Company){
    const { error } = Validation.Company.validate(company);

    const createCompany = await this.model.create({ ...company});

    return Response(201, createCompany)
  }

  async deleteCompany(companyId: string) {
    const company = await this.model.findByPk(companyId);

    if(!company) {
      return Response(404, {error: 'Empresa não Encontrada!'});
    }
    await company.destroy();
    return Response(202, { message: 'Empresa excluida com sucesso!'})
  }

  
}

export default CompanyService;