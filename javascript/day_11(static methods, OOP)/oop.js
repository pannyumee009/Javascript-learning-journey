// static public private protected
//public => can show, can change, public
 


class School{
  constructor() {
    
  }

  static message = 'Hello World'; //static method //call directly from class
  
  greeting() {           //if we add static, we have to call class to console.log
    console.log("morning")
  }
  name = 'code';     //public
  location = 'myanmar';
}

const obj = new School();

obj.name = 'pann yu';
console.log(obj)
console.log(School.message)
obj.greeting()