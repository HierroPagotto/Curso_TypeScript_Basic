function Person (firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'Hierro',
  lastName: 'Pagotto',
  age: 19,

  fullname(){
    return `${this.firstName} ${this.lastName}`
  },
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

function SubPerson(firstname, lastName, age){
  Person.call(this, firstname, lastName, age);
  this.fromSubClass = 'OIE';
}

SubPerson.prototype = Object.create(Person.prototype);
Person.prototype.constructor = SubPerson;

const person1 = new Person('Hierro', 'Pagotto', 19)
console.log(person1);
console.log(person1.fullname())

const person2 = new Person('Helena', 'Queiroz', 29)
console.log(person2);
console.log(person2.fullname())
