// let s1 = "Ganesh"
// let s2 = ["ram", "sham"]
// One person info store
// FirstName
// LastName
// age
// rollNo
// let arr = ["Kiran", "kumar", 29,43]
// index

//object
// index xx
// key value

let y0 = []
let y1 = {}

// let student = {
//key: value -- property
// firstName = "kiran",
// LastName = "kumar",
// age = 29,
// rollNo = 45
//}

//key

let arr = ["kiran", "kumar",29, 45]

// 1 . retrive/ fetch
// console.log(arr[0])
// console.log(arr[3])

// 2 . update
//  arr[0] = "mayuri"
//  console.log(arr)

// arr[2] = 50
// console.log(arr)

// 3 . add
// arr.push("radha")
// console.log(arr)

//  100
// arr.unshift(100)
// console.log(arr)

// delete
// arr.shift()
// console.log(arr)

// arr.pop()
// console.log(arr)

// object
// add /create, retrive,update,delete === CURD
let student = {
    //key:value =>property
    firstName: "kiran",
    lastName: "Kumar",
    age: 29,
    rollNumber: 45
}

// CURD
// dot notation
// bracket notation

// 1. create/add 
// dot notation 
// student.city="pune"
// console.log(student)

// bracket notation
// student['skill']="javascript"
// console.log(student)

// 2. retrive/fetch
// dot notation
// console.log(student.lastName)
// console.log(student.rollNumber)

// bracket notation
// console.log(student["firstName"])

// 3. update
// dot notation
// student.firstName = "Radhe"
// console.log(student)

// bracket notation
// student["age"]= 90
// console.log(student)

// delete
// dot notation
//  delete student.firstName
//  console.log(student)

// bracket notation
delete student["rollNumber"]
console.log(student)