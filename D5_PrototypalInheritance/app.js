function Person(firstname, lastname)
{
  this.firstname = firstname;
  this.lastname  = lastname; 
}

var anderson = new Person('Anderson', 'Malagutti');

// console.log(anderson);
// console.log(anderson.firstname);
// console.log(anderson.lastname);

//It does not go to the anderson object, but to all instances of the Person
Person.prototype.greet = function()
{
  console.log(`Hello ${this.firstname} ${this.lastname}`);
}
anderson.greet();

var john = new Person('John', 'Doe');
john.greet();

console.log(anderson.__proto__);
console.log(anderson.__proto__ === john.__proto__);