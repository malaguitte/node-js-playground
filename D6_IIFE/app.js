var firstname = 'Something else';

//immediately invoked function
(function (lastname) 
{
 var firstname = 'Anderson'; 
 console.log(firstname);
 console.log(lastname);
}('Malagutti'));

console.log(firstname);
