// var firstName = "vijeet"
// var lastName = "dani"

// let info = {
//     firstName:"pallavi",
//     lastName:"jondhale",
//     display:function(){
//         // this - info
//         console.log( this.firstName + this.lastName)
//         function display2(){
//         // this -window
//         console.log(this.firstName + this.lastName)

//         }
//         display2()
//     }

// }
// // info display()


//  let info = {
//     firstName:"pallavi",
//     lastName:"jondhale"
//     display: function () {
//         //this info
//         console.log(this.firstName + this.lastName)
//         let display2 = ()=>{
//          //this info
//          console.log(this.firstName + this.lastName)
//         }
//         display2()
            
//     }

//     }
    // info.display()

    // info2 == this ---- window
// let info2 = {
//     firstName:"pallavi",
//     lastName:"jondhale",
//     display:()=>{
//         // this --- window
//         console.log(this.firstName + this.lastName)
//         // this --- window
//         // display2 ----> this ---- its parent this value
//         let display2 = ()=>{
//             console.log(this.firstName + this.lastName)
//         }

//         display2()
//     }
// }
// info2.display()


// program 4 
function additionA(x,y){
   return x + y
}
let r1 = additionA(12,4)
console.log(r1)

// program 5
let addition2 = function(x,y) {
    return x + y
}
let q1 = addition2(12,3)
console.log(q1)

// program 6
let addition3 = (x,y)=> x + y
let q2 = addition3(12,3)
console.log(q2)

// program 7
// function greet(name){
//     return "hello "+ name
// }
// let q3 = greet("chinmay")
// console.log(q3)


// let greet = function(name){
//     return "hello "+ name
// }
// let q3 = greet("chinmay")
// console.log(q3)

let greet = name =>"hello "+ name
let q3 = greet("chinmay")
console.log(q3)
    