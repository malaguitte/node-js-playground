const Person = {
  firstname: '',
  lastname: '',
  greet: function()
  {
    return this.firstname + ' ' + this.lastname; 
  }
}

var anderson = Object.create(Person);
anderson.firstname = 'Anderson';
anderson.lastname = 'Malagutti';
console.log(anderson.greet());

var heverton = Object.create(Person);
heverton.firstname = 'Heverton';
heverton.lastname = 'Castro';
console.log(heverton.greet());