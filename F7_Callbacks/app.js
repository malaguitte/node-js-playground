function greet(someCallback)
{
  console.log("Hello, this is an example with a callback");
  var data = {
    name: "John",
    surname: "Doe"
  }

  someCallback(data);
}

var firstCallback = function(data) {
  console.log("callback has been invoked 1!");
  console.log(data);
}

var secondCallback = function(data) {
  console.log("callback has been invoked 2!");
  console.log(`Hi ${data.name} ${data.surname}. ;)`);
}
greet(firstCallback);
greet(secondCallback);