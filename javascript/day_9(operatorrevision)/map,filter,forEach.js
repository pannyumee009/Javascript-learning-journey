//default parameter
const testing = (x=0, y=0) => console.log(x + y);
testing(40)

//useful array function
const arr = [10, 20, 30, 40, 50, 60, 70];  //unique = index(no repeatation)
//map returns true, false
//let result = arr.map((data, index, array) => {
//  return data <= 30;
//
//})

//filter returns correct value
//let result = arr.filter((data, index, array)=>{
//  return data <= 30;
//})
//
//console.log(result)

//for (let i = 0; i < arr.length; i++){
//  console.log(arr[i]);
//}
//
//arr.forEach(e => {
//  console.log(e);
//})

//let result1 = [];
//for (let i = 0; i < arr.length; i++){
//  if (arr[i] <= 40) {
//    //result1 += arr[i]   => string
//    result1.push(arr[i]);  =>array
//  }
//}
//
//console.log(result1)

//***************
//map => true,false(return)
//filter => value(return)
//forEach => give array(no return)
//find => return first value of element of the checkpoint (return)
//***************

//const data = arr.map((item, index, array)=>{
//  return item <= 30;
//})
//
//const data = arr.filter((item, index, array) => {
//  return item <= 30;
//})
//
//arr.forEach((item, index, array)=> {
//  arr[index]= arr[index]*10
//})
//let result = arr.find((item, index, array) => {
//  return item <= 30;
//  
//})
//
//console.log(result)

//let r = [];
//
//for (let i = 0; i < arr.length; i++){
//  r.push(arr[i]*10)
//}

arr.forEach((item, index, array) => {
   arr[index] = arr[index]*10
})

console.log(arr)