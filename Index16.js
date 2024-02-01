//  let car = {
//     color: "white",
//     model:"SUV",
//     numberPlate:12345,
//     color:"red"
// }
//   console.log(car)

//   let student = {
//     firstName:"mayuri",
//     lastName: "katwe",
//     rollNumber: 34,
//     skills:["java","Python","cypress"],
//     isDoingjob: false
//   }
//   1 way
// for in 
// values
// objectName.key= value
// objectName[key]= value

// for(let key in student){
//     console.log(student[key])
// }

// key
// for(let key in student){
//     console.log(key)
// }

// key , value
// for(let key in student){
//     console.log(key,student[key])
// }
let student = {
    firstName:"mayuri",
    lastName: "katwe",
    rollNumber: 34,
    skills:["java","Python","cypress"],
    isDoingjob: false

}

  // print keys

  // for of
//   for(let key of Object.keys(student)){
//     console.log(key)
//   }

//values
// for(let val of Object.values(student)){
//     console.log(val)
// }

// key, value
for(let[k,v] of Object.entries(student)){
    console.log(k,v)
}
