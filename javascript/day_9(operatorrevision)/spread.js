const alertMessage = (username) => `My Name is ${username}`;

//console.log(alertMessage("Pann Yu"));

//spread operator (...)
//object with spread operator
const data = {
  name: "pann",
  age: '21',
  job: 'programmer'
};

const cloneData = {
  ...data,
  address: "kyonpyaw",
  
};

console.log(cloneData)

//array with spread operator
const layer1 = [1, 2, 3];
const layer2 = [4, 5, 6];

const combine_layer = [...layer1, ...layer2];
console.log(combine_layer)

//to add infinity value
const result = (x, y, ...rawData) => console.log(x, y,rawData);

result(100,200,300,400,500)

const addData = (...raw) => console.log(raw)

addData(1,2,3,4,5,4)





