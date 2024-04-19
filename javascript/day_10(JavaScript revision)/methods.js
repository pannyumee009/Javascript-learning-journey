//find method
const arr = [10, 20, 30, 40]

const data = arr.find((item) => item <= 40) //return the first value of the element which is right
console.log(data)


//some method
const s = arr.some((item) => item < 40)  //return true if one is true
console.log(s)

//every method
const e = arr.every((item) => item < 40) //return true if all must true
console.log(e)

//includes method
const i = arr.includes(40) //if it exist, true
console.log(i)