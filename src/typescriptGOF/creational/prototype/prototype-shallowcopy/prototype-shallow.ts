export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address [] = [];

  constructor(public name: string, public age: number){}

  clone(): this {
    const newObj = Object.create(this);
    return newObj;
  }

  addAddress(address: Address):void{
    this.addresses.push(address);
  }
}

export class Address implements Prototype {
  constructor(public street: string, public number: number) {}

  clone(): Address {
    return new Address(this.street, this.number);
  }
}

const address1 = new Address('Av. Moraes Salles', 153);
const person1 = new Person('Hierro', 19);
person1.addAddress(address1);
const person2 = person1.clone();

person1.addresses[0].street = 'bla bla bla'

person2.name = 'Person2';
console.log(person2);
console.log(person2.addresses);

console.log();
console.log(person1);
console.log(person1.addresses);
