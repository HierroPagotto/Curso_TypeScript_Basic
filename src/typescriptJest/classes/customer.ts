import {
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
  CustomerOrder,
} from './interfaces/customer-protocols';

export class IndividualCustomer
  implements IndividualCustomerProtocol, CustomerOrder {
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }

  getName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  getIDN(): string {
    return this.cpf;
  }
}

export class EnterpriseCustomer
  implements EnterpriseCustomerProtocol, CustomerOrder {
    Name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.Name = name;
    this.cnpj = cnpj;
  }

  getName(): string {
    return this.Name;
  }

  getIDN(): string {
    return this.cnpj;
  }
}
