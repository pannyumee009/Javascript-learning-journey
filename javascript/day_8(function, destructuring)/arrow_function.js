//console.log('this is function')

function greeting() {
  console.log("morning")
}     //no return

greeting()

//return function
//regular function
function hello() {
  return "hello"
}

let message = hello();
console.log(message)

//es6 arrow function
const arrow_greeting = () => {
  console.log("this is arrow function")
}

const bye = () => "hello bye";

console.log(bye())
arrow_greeting()

let sum = (num1 =0,num2=0) => num1 + num2;
console.log(sum(20, 10))

const arrowArray = () => ({    //must include "=>({})" 
  name: 'anna',
    job: "programmer"
});

console.log(arrowArray())

//return this
const sampleObject = {
  school: 'code projects',
  type: 'training enter',
  simpleFunction() {
    return this.school   //this represent the whole block sample Object
  },
  arrowFunction : () =>this     //in arrow function, this represent the whole DOM
}

console.log(sampleObject.simpleFunction())
console.log(sampleObject.arrowFunction())

//function
function sumNo(num1, num2) {
  return num1+num2
}

console.log(sumNo(10, 20))

const fun = new Function("num1", "num2", "return num1+num2");//rarely use,need to be strings

console.log(fun(15, 20))

//array destructuring
const myArr = ['bmw', 'white', '2020'];

//const name = myArr[0];
//const color = myArr[1];
//const model = myArr[2];

//console.log(name,color,model)

//use array for array destructuring
const [nm, cl, ml] = myArr;
console.log(nm,cl,ml)

//object destructuring
const myObject = {
  name: 'suzuki',
  color: 'red',
  model: '2019'
}

//const nm = myObject.name; 
//const cl = myObject.color;
//const ml = myObject.model;

const { name, color, model } = myObject;  //must be same with the original object
console.log(name, color, model)

//nested destructuring
const nestedObject = {
  schoolName: 'code lab',
  type: 'programming',
  school_location: 'myanmar',
  address: {
    street: '25th str',
    city: 'yangon',
    phone: '094944444'
  }
}

//const school_type = nestedObject.type;
//const address_city = nestedObject.address.city
//
//const { schoolName, location, type } = nestedObject;
//
//const{street, city, phone} = address
//console.log(nestedObject) 
//console.log(type, address_city)

const { schoolName, type, school_location, address: { street, city, phone } } = nestedObject
console.log(schoolName, type, school_location, street, city, phone)

