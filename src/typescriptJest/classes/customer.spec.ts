import { IndividualCustomer, EnterpriseCustomer } from "./customer";

const creatIndividualCustomer = (firstName: string,
  lastName: string,
  cpf: string
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
}

const creatEnterpriseCustomer = (Name: string,
  cnpj: string
): EnterpriseCustomer => {
  return new EnterpriseCustomer(Name, cnpj);
};

describe('IndividualCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = creatIndividualCustomer('Hierro', 'Pagotto', '123.456.789-00');
    expect(sut).toHaveProperty('firstName', 'Hierro'),
    expect(sut).toHaveProperty('lastName', 'Pagotto'),
    expect(sut).toHaveProperty('cpf', '123.456.789-00');
  });

  it('should have methods to get name and idn', () => {
    const sut = creatIndividualCustomer('Hierro', 'Pagotto', '123.456.789-00');
    expect(sut.getName).toBe('Hierro Pagotto');
    expect(sut.getIDN).toBe('123.456.789-00');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = creatEnterpriseCustomer('Udemy', '12.345.678/0001-90');
    expect(sut).toHaveProperty('Name', 'Udemy'),
    expect(sut).toHaveProperty('cnpj', '12.345.678/0001-90');
  });

  it('should have methods to get name and idn', () => {
    const sut = creatEnterpriseCustomer('Udemy', '12.345.678/0001-90');
    expect(sut).toBe('Udemy'),
    expect(sut).toBe('12.345.678/0001-90');
  });
});
