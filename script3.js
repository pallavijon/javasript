//rest parameter

// function addition(...arr){
//     console.log(arr)
//     return arr.reduce(function(acc,el){
//         return acc + el

//     },0)
// }
// let q1 = addition(12,33,44,55,66,77,88,33,55,66,77)
// console.log(q1)

//rest operator
//34,55,66,22,33,44,555 =====> [34,55,66,22,33,44,555]

//spread operator
//[11,22,33,44] =======> 11,22,33,44

// let marks =[11,22,33,44,55,66,77,88,99,100]
// function additionB(a,b,c){
//     console.log(a+b+c)
// }
// addition(...marks)

// // program 3
// let numA =[11,22,33]
// let numB =[44,55,66]
// let q2 =[...numA,...numB]
// console.log(q2)

// //program 4
// let info ={
//     firstName:"chinmay",
//     lastName:"deshpande"
// }

// let address={
//     country:"India",
//     state:"MH"
// }
// let q3 ={...info,...address}
// console.log(q3)

//program 5
//  info ={
//      firstName:"pallavi",
//        lastName:"jondhale",
//        age:23,
//        rollNo:22
// }
// function ifo({firstName,...info}){
//     console.log(firstName)
//     console.log(info)

// }
// ifo(info)

//program 6
// function aboveCompare(compare,...vals){
//     console.log(vals)
//     console.log(compare)
// let above44 = vals.filter(function(el,index,arr){
//     return el > compare
// })
// console.log(above44)
// }
// aboveCompare(400,11,34,55,22,434,55,66,77,888,99,990)
// aboveCompare(200,11,34,55,220,434,55,66,77,888,99,990)

// program 7
// let x = 10
// let y = x

// y = 900 
// console.log(y) 
// console.log(x)

// let numbers = [11,22,33]
// numbersB = numbers
// numbersB[0] = 333
// console.log(numbersB)
// console.log(numbers)

let names =["chinmay","shirish","sham"]
let m =[...names]

console.log(names)
console.log(m)
m[0] ="tanmay"

console.log(names)
console.log(m)

       
