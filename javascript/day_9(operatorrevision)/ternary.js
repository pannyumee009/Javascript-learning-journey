let num = "one";

if (num == "one") {
  console.log("this is one")
} else {
  console.log("this is others")
}
// == (check for value) | === (check for value and type)
//=== (ternary operator)
num === "two" ? console.log("this is two") : console.log("this is others");


let operation = "sum";
let result = operation == "sum" ? 20 + 5 : 20 - 5;
console.log(result);

//template literal object => ``
//single code => ''
//double code => ""
const school = "code lab";

//const message = "School Name is " + school;
//const message = 'School Name is ' + school;
const message = `School Name is ${school}`;
console.log(message)