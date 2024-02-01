//Array 
// let a = []
//     b = 20

// let marks = [23, 56, 78, 90, 36]
//   // +2
//   // 25,58,80,92,38

//   let plus2 = []
//   for (let i = 0; i < marks.length; i++){
//     //console.log(i)
//     plus2.push(marks[i] + 2)
//   }
//     console.log(plus2)

// map()
// action - perform the action with each element of array
// return - new array
// let plusTwo = marks.map(function (element, index, array) {
//     return element + 2
// })
// console.log(plusTwo)

// let numbers = [25,67,12,35,10,70,10]
// // // > 25 find
// //67,35,70 
// let greater25 = []

// for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] > 25){
//     greater25.push(numbers[i])
//     }
// }
//   console.log(greater25)



// filter()
// // action  - filter out the ele based on given condition
// // return - array
// let above25 = numbers.filter (function( el,index,array){
//     return el > 25
// })
//   console.log(above25)

// let arr = [2,3,4,5] //14
// let sum = 0 //0 //2 //5 //9 //14
//  for (let i = 0; i < arr.length; i++){
//     sum = sum + arr[i]
// }
// //0+2 = 2
// //2+3 = 5
// //5+4 = 9
// //9+5 = 14
// console.log(sum)

//reduce()

// let sumEle = arr.reduce(function(acc,el,index,arr){
//     return acc + el
// },0)
// console.log(sumEle)

// let student =["mayuri" , "vaibhav" , "ram" , "prashant"]
// for (let i = 0; i < student.length; i++){
//     console.log( "welcome" + student[i] + "!!")
// }
//foreach()
// let cities = ["pune", "mumbai", "banglore", "kolkata"]
// cities.forEach(function(el,index,arr){
//     console.log("welcome" + el)

// //some()
// let mark1 =[2,3,4,5,6,7]
// let output = mark1.some(function(el,index,arr){
//     return el > 3
// })
// console.log(output)

// find()
//  let marks1 = [23, 67, 89, 78, 100, 25]
// //              0   1   2   3   4  5
// let x1 = marks1.find(function(el, index, arr) {
//     return el > 70
// })
// console.log(x1)

// let x2 = marks1.find(function(el,index,arr){
//     return el > 300
// })
// console.log(x2)

//findIndex()
// let s1 = marks1.findIndex(function(el,index,arr){
//     return el > 50
// })
// console.log(s1)

// let s2 = marks1.findIndex(function(el,index,arr){
//     return el > 200
// })
// console.log(s2)

// slice()
//          -9   -8  -7 -6  -5   -4   -3   -2  -1
// let scores =[12, 56, 89, 43, 22, 100, 560, 200, 456]
//            0   1   2   3   4    5    6    7    8
// array name.slice(startposition,endposition)
// endposition optional
// left to right
// right to left    - blank array

// let d1 = scores.slice(2,6)
// console.log(d1)

// let d2 = scores.slice(-5)
// console.log(d2)

// let d3 = scores.slice(-3,3)
// console.log(d3)

//splice()
//                0        1       2         3        4         5
// let animals = ["tiger", "lion","bollock", "camal", "rabbit", "snake"]
// // animals shift()
// // animals pop()
// // animals splice(index,no.of elememt to br deleted, rep1, rep2)
// //  animals.splice(3,3)
// //  console.log(animals)
// animals.splice(2,2, "bear", "frog", "cat")
// console.log(animals)

//fill()
//                  0    1   2   3   4   5   6   7   8
// let numbersB = [11,  22, 33, 44, 55, 66, 77, 88, 99]
// numbersB.fill(undefined, 4 ,7)
// console.log(numbersB) 

//sort()
let country = ["india", "shrilanka","bangladesh","japan"]
country.sort()
console.log(country)