function GreetObject()
{
  this.greeting = "Hello greet 3";
  this.greet = function() 
  {
    console.log(this.greeting);
  }
}

module.exports = new GreetObject();