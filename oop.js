class Person {
  // Set empty attributes (variables)
  #name;
  #dateOfBirth;
  #placeOfBirth;

  // Set attributes to specific values when you create an instance of a class (from arguments passed in)
  constructor(name, dateOfBirth, placeOfBirth) {
    this.#name = name;
    this.#dateOfBirth = dateOfBirth;
    this.#placeOfBirth = placeOfBirth;
  }

  // Define methods (functions) so we can alter or return the attributes from other code parts
  get name() {
    return this.#name;
  }

  // Change an attribute's value
  set name(name) {
    this.#name = name;
  }

  // Return an attribute's value
  get dateOfBirth() {
    return this.#dateOfBirth;
  }

  get placeOfBirth() {
    return this.#placeOfBirth;
  }

  // Define a method to do something
  talk() {
    return `Hi my name is ${this.name} and I was born in ${this.placeOfBirth}.`;
  }
}

// Create a child/subclass of the parent Person
class AdaStaff extends Person {
  #role;
  #base;

  // Set attribute values according to arguments passed in during object instantiation
  constructor(name, dateOfBirth, placeOfBirth, role, base) {
    super(name, dateOfBirth, placeOfBirth); // Inherit the attributes and methods from the parent class Person
    this.#role = role;
    this.#base = base;
  }

  get base() {
    return this.#base;
  }

  set base(base) {
    this.#base = base;
  }

  get role() {
    return this.#role;
  }

  set role(role) {
    this.#role = role;
  }

  talk() {
    return `Hi my name is ${this.name}. I work in ${this.base} and my role is ${this.role}.`;
  }
}

class AdaStudent extends Person {
  #company;
  #pathway;
  #yearStarted;
  
  constructor(name, dateOfBirth, placeOfBirth, company, pathway, yearStarted) {
    super(name, dateOfBirth, placeOfBirth);
    this.#company = company;
    this.#pathway = pathway;
    this.#yearStarted = yearStarted;
  }

  get company() {
    return this.#company;
  }

  get pathway() {
    return this.#pathway;
  }

  set company(company) {
    this.#company = company;
  }

  set pathway(pathway) {
    this.#pathway = pathway;
  }

  talk() {
    return `\nHi my name is ${this.name}.\nMy company is ${this.company} on the ${this.pathway}.\nI was born on ${this.dateOfBirth} in ${this.placeOfBirth}.`;
  }
}

class Cohort {
  _cohortCode;

  constructor(cohortCode) {
    this._cohortCode = cohortCode;
    this.cohort = [];
  }

  add(AdaStudent) {
    this.cohort.push(AdaStudent);
    return this.cohort.length;
  }
}

// Testing code

const aqil = new Person("Aqil Hussain", "01/01/2000", "Manchester");
const steve = new AdaStaff("Steve Rich", "01/01/1998", "Lincoln", "Lecturer", "Manchester");
const firas = new AdaStudent("Firas Layani", "19/06/2006", "London", "59A", "Data Analysis", 2024)

const april24 = new Cohort("24-04-LDN-MCR");
const firasL = new AdaStudent("Firas Layani", "19/06/2006", "London", "59A", "Data Analysis", 2024)
april24.add(firasL)
april24.add(new AdaStudent("Jess Fryer", "02/02/1998", "Manchester", "PwC", "TC", 2024))
console.log(april24);

// console.log(steve);
// console.log(aqil);
// console.log(steve.talk());
// console.log(aqil.talk());
// console.log(steve.name);
// steve.name = "Stevano Rich";
// console.log(steve.name);
// console.log(firas, firas.name, firas.talk())
