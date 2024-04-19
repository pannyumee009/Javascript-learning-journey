//OOP => object oriented programming

//class => template

//object => to call value in class, we need to create object

class School{    //class, we can't declare variable
  name = "code projects";
  type = "Programming training center";
  location = "Myanmar";
}

console.log(School.name) //=> produce School, can't call like that, need to create object

const obj = new School(); //create object which represent class
console.log(obj.name) //need to call from object not class

//date
const thailandDate = new Date();

console.log(thailandDate)


