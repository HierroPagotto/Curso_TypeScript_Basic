const personPrototype = {
  firstName: 'Hierro',
  lastName: 'Pagotto',
  age: 19,

  fullname(){
    return `${this.firstName} ${this.lastName}`
  },
};

const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = 'Julius';
console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullname());

