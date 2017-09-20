const greeting1 = 'Hello greet 5 1';
const greeting2 = 'Hello greet 5 2';
function greet1()
{
  console.log(greeting1);
}

greet2 = () => {
  console.log(greeting2);
}


module.exports = {
  greet1 : greet1,
  greet2 : greet2
};