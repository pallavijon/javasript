//  program 1

// Encapsulation
// lexical scope

// function addition(){
//     let a = 10
//     let b = 5
//     console.log(a + b)
//     function additionB(){
//     let s = 8
//     let t = 4
//     console.log(a + b + s + t)
//     // console.log(a1 + b1)
//     function additionC(){
//     let a1 = 10
//     let b1 = 5
//     console.log(a + b + s + t + a1 + b1)

//     }
//     additionC()

//   }
//     additionB()
// }
// addition()

// // program2

// function additionD(x,y){
//     console.log(x + y)
//     return x + y
//     console.log("hello")
// }
//  let q2 = additionD(12,3)
//  console.log(q2)

//  program 3
// number as parameter and number as a return type
//     function addA(x,y){
//       return x + y
//     }
//     let q3 = addA(12,5)
//     console.log(q3)

// //  program 4
// // string as parameter and string as a return type
// function greet(word){
//     return"hello" + word
// }
// let q4 = greet("pallavi")
// console.log(q4)

// // program 5
// // boolean as parameter and boolean as a return type
// function cabDrive(age, haveVehicle){
//     if(age >= 18 && haveVehicle){
//         return true
//     }
// }
// let q5 = cabDrive(21,true)
// console.log(q5)

// // program 6
// // array as parameter and array as a return type
// let cities = ["pune","banglore","mumbai"]
// function addcity(arr){
//     arr.push("nagpur")
//     return arr
// }
//  let q6 = addcity(cities)
//   console.log(q6)

// // program7
// // object as parameter and object as a return type
// let info = {
//     firstName:"pallavi",
//     lastName:"jondhale",
//     age:23
// }
// function addcity(obj){
//     obj.city ="pune"
//     obj['city2'] = "wardha"
//     return obj
// }
//  let q7 = addcity(info)
//  console.log(q7) 

// function as a return
function addN(){
    return function(){
        console.log("hello")
    }
}
// let q8 = addN()
// console.log(q8)

let q8 = function(){
    console.log("hello")
}