var obj = {
  name : 'Anderson Malagutti',
  greet : function() 
  {
    console.log(`Hello ${this.name}`);
  }
}

obj.greet();

//overrides the 'this'
obj.greet.call( {name : 'Heverton Castro'} ); //pass params as a list separated by comma.
obj.greet.call( {name : 'Heverton Castro'} ); //pass params as an array