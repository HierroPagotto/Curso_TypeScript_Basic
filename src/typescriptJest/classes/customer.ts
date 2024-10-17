import { findSourceMap } from 'module';
import { IndividualCustomerProtocol, EnterpriseCustomerProtocol, CustomerOrder } from './interfaces/customer-protocols'

export class IndividualCustomer implements IndividualCustomerProtocol, CustomerOrder{
  firstName: string;
  lastName: string;
  cpf: string;
  cnpj: string;

  constructor( firstName: string,
    lastName: string,
    cpf: string,
    cnpj: string ){
      this.firstName = firstName;
      this.lastName = lastName;
      this.cpf = cpf;
      this.cnpj = '';
    }

    getName(): string{
      return this.firstName + '' + this.lastName
    }

    getIDN(): string{
      return this.cpf;
    }
}

export class EnterpriseCustomer implements EnterpriseCustomer, CustomerOrder{
  Name: string;
  cnpj: string;

  constructor( Name: string,
    cnpj: string ){
      this.Name = Name;
      this.cnpj = '';
    }

    getName(): string{
      return this.Name;
    }

    getIDN(): string{
      return this.cnpj;
    }
  }
