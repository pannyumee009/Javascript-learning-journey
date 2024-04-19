//static public private protected
//public => can change value/ show to public/can use
//static => can change value/ not show to public/ have to call class for output/ can use
//private => shown to public/ can't change value/can't use but can change and use with encapsulation (we build function in the class)
class morning{
  constructor(){

  }
  //static
  static msg = 'welcome to coding';
  static output = 'hello';

  //public
  ph_no = '09-----';
  location = 'myanmar';

  //private
  #type = 'programming languages';

  changeValue() {
    return this.#type = "Software";
    //return this.#type
  }
}

let obj = new morning();

morning.message = 'hi';

obj.name = 'pann';

//obj.#type = 'hello';  //can't change value 
console.log(obj.changeValue()) //changing private value