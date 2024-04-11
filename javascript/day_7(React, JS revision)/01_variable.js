//console.log("hello world")
//Difference between let, var, const

//var => global scope | function scope
//let | const => local scope| block scope
var message = "This is testing message";    //global scope
for (var i = 0; i < 4; i++) {
  let innerMessage = 'inner message'; //local scope
  //var m = 'hello'; //global scope (can use outside)
  //console.log(message + i)
  console.log(innerMessage)
}
//console.log(message)

//function with variables
function show() {
  //var innerforM = 'inner';   //global scope(but inside a function, cannot call to use outside)
  //let innerforM = 'inner';   //local scope cannot use outside
  //const innerforM = 'inner';   //local scope cannot use outside

}

show()
//console.log(innerforM)

let var1 = 1;
var var2 = 2;
const var3 = 3;

var1 = 10;  //can overwrite
var2 = 20;  //can overwrite
//var3 = 30;  //cannot overwrite, permanent value

console.log(var3)

//const (cannot change, assign the entire one, but can fix the specific value)
const cars = {
  name: "Nissan",
  color: 'while'
}
//let and var can be changed the entire value
//cars = "title" | {name: 'h'}  //cannot add like this, cannot change entirely
cars.name = "BMW";  //items can be changed
cars.color = "black";


const books = [
  1,2,3
]

books[1] = 5;
console.log(books)