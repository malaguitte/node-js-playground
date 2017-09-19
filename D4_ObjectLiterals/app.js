var person = {
  'firstname' : 'Anderson',
  'lastname'  : 'Malagutti',
  'greet'     : function() 
  {
    console.log(`Hello ${this.firstname} ${this.lastname}`);
  }
}

person.greet();

//these are the same thing
console.log(person.firstname);
console.log(person['firstname']);