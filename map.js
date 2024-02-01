// let student = {
//        firstName: "pallavi",
//         family: {
//             Father: "parasharam",
//             sibling: 1
//         },
//         1000: true,
//         true: ["java", "js", "py"],
//         rollNumber: 500,
//         age: undefined
//     }


// for(let key in student){
//     console.log(typeof(key))
// }
  
// object = key value
// string = any type

// map = key value
// any datatype = any datatype

// let myMap = new Map()
// console.log(myMap)

// // 1 . Set() = add property
// let val =[1,2,3]
// let val1 ={a:20, b:30}
// myMap.set(val,"rollNumber")
// myMap.set(val1,"object")
// myMap.set(true,"isMarried")
// console.log(myMap)

// //  2. get(key) =retrive
// let a = myMap.get(val1)
// console.log(a)
// console.log(myMap.get(true))

// // has(key) 
// console.log(myMap.has(true))
// console.log(myMap.has("rollNumber"))

// // delete() = boolean
// console.log(myMap.delete(val))
// console.log(myMap)

// //clear()
// myMap.clear()
//  console.log(myMap)

 let myMap2 = new Map([[true,"isDoingjob"],["FirstName","pallavi"],[200,"rollNo"]])
 console.log(myMap2)