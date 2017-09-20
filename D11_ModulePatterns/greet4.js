function GreetObject()
{
  this.greeting = "Hello greet 4";
  this.greet = function() 
  {
    console.log(this.greeting);
  }
}

module.exports = GreetObject;