export interface CustomerOrder{
  getName(): string;
  getIDN(): string;
}

export interface IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
  cnpj: string;
}

export interface EnterpriseCustomerProtocol {
  Name: string;
  cnpj: string;
}