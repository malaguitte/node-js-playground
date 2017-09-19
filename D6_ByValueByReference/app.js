//pass by value, DOES NOT change the original value
function change(b)
{
  b = 2;
}
var a = 1;
change(a);
console.log(a);

//pass by reference, DOES change the original value
function changeObj(d) 
{
  d.prop1 = function() {};
  d.prop2 = {};
}

var c = {
  prop1: 'example'
};

changeObj(c);
console.log(c);