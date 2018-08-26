angular.module('TestApp', []);

angular.module('TestApp')
  .controller('MainController', ctrlFunc);

function ctrlFunc() {
  this.message = 'Hello World';

  this.people = [
    {
      name: 'John Doe'
    },
    {
      name: 'Jane Doe'
    },
    {
      name: 'Jim Doe'
    }
  ];

}