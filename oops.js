// program1
// object literal
// let amol ={
//     firstName:"amol",
//     lastName:"rao",
//     age:12,
//     rollNo:15
// }
// let chinmay ={
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:23,
//     rollNo:45

// }

// retrive,update,add,delete
// console.log(chinmay.firstName)
// console.log(chinmay['firstName'])

// chinmay.firstName ="chinmayee"
// chinmay['firstName'] = "ninad"

// chinmay.city ="pune"
// chinmay['language'] = "marathi"

// delete chinmay.city
// delete chinmay['city']


// template

// function contructor

// function Person(fn,ln,ag,rn){
//     this.firstName = fn
//     this.lastName = ln
//     this.age = ag 
//     this.rollNo = rn
// }

// let poorva = new Person("poorva","vyas",34,55)
// let pooja = new Person("pooja","joshi",33,56)

// console.log(pooja)
// console.log(poorva)

// poorva.firstName = "poorva sharma"
// poorva.city ="ujjain"
// delete poorva.lastName
// console.log(poorva)

// Es6 class

// class personA {
//     firstName
//     lastName
//     age
//     rollNo
//  }

//  let amolq = new personA()
//  console.log(amolq)

// //  accessing the property and updating it outside the class
// amolq.firstName="amol"
// amolq.lastName="rao"
// amolq.age= 44
// amolq.rollNo = 44
// console.log(amolq)

// // Es6 class with constructor

// class PersonD{
// constructor(fn,ln,ag,rn){

//  this.firstName = fn
//  this.lastName = ln
//  this.age = ag
//  this.rollNo = rn
//     }
// }
 
// let sarika = new
// PersonD("sarika","pansare",45,66)
// console.log(sarika)
// // object create

// let poorva = object.create({})
// console.log(poorva)
// poorva.firstName ="poorva"
// poorva.lastName ="vyas"
// poorva.rollNo = 34
// poorva.age = 44
// console.log(poorva)

// // object literal

// // let amol = {
// // firstName:"amol"
// // lastName:"rao"
// // display:function(){
// //  // this.amol
// //  console.log(this.firstName + this.lastName)
// //     }
// // }

// // let chinmay = {
// // firstName:"chinmay"
// // lastName:"deshpande"
// // display:function(){
// //  // this.chinmay
// //     console.log(this.firstName + this.lastName)
//     //     }
//     // }
//     // amol.display()
//     // chinmay.display()

// // function constructor

// function PersonK(fn,ln){
//     this.firstName = fn
//     this.lasstName = ln
//      this.display=function(){
//     console.log(this.firstName + this.lastName)
//     }
    
// }
//  let amolK = new
//  PersonK("amolK","roaK")
//  let chinmayK = new
//  PersonK("chinmayK","deshpandeK")
//  console.log(amolk)
//  console.log(chinmayK)

//  amolK.display()
//  chinmayK.display()

//  prototype inheritance

// every object has one _proto_ == Parent.protype
// console.log(amolk._proto_ == PersonK.prototype)
function PersonK(fn,ln){
    this.firstName = fn 
    this.lastName = ln 

}

let amolk = new PersonK("amolK","raoK")
let chinmayk = new PersonK("chinmayK","deshpandeK")
console.log(amolk)
console.log(chinmayk)

PersonK.prototype.display = function(){
    console.log(this.firstName + this.lastName)
}

amolk.display()
chinmayk.display()

// prototype inheritance
// every object has one _proto_ == Parent.protype
console.log(amolk._proto_ == PersonK.prototype)
console.log(chinmayk._proto_ == PersonK.prototype)

Array.prototype.hello = function(){
    console.log("Minskole")
}
let names = ["chinmay","ram","sham"]
console.log(names)
names.hello()
console.log(names._proto_ === Array.prototype)


// // function declaration 

// function additionQ(){
//     console.log(6+6)
// }
// additionQ()

// // function expression 
// let additionZ = function (){
//     console.log(8+6)
// }

// // arrow function 
// let additionY =()=>{
//     console.log(8+61)
// }
// additionY()




// object.create()