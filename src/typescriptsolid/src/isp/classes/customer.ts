import { findSourceMap } from 'module';
import { IndividualCustomerProtocol, EnterpriseCustomerProtocol } from './interface/customer-protocols'

export class Individualustomer implements IndividualCustomerProtocol{
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
}

export class EnterpriseCustomer implements EnterpriseCustomer{
  Name: string;
  cnpj: string;

  constructor( Name: string,
    cnpj: string ){
      this.Name = Name;
      this.cnpj = '';
    }
  }
