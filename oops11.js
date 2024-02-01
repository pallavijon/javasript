// object literal
let amol = {
    firstName:"amol",
    lastName:"Rao",
    age:25,
    rollNo:15
 }

 let chinmay ={
    firstName:"chinmay",
    lastName:"deshapande",
    age:34,
    rollNo:35

 } 
// 1 object -------> 4 lines
// 100 object ------> 400 lines
// templets --------> object

//user defined data type

// // program 2
//   class person{
//     firstName
//     lastName
//     age
//     RollNo
//   }

  let amolA = new personA()
  console.log(amolA)
  amolA.firstName="amolA"
  amolA.lastName= "RaoA"
  amolA.age = 33
  amolA.RollNo = 56
  //console.log(amolA)

//  retrive - dot notation and bracket notation
// console.log(amolA.firstName)
// console.log(amolA['firstName'])
// add - dot notation and bracket notation
// amolA.language = "Marathi"
// amolA['city'] = "Pune"
// update- dot notation and bracket notation
// amolA['city'] = "nagpur"
// amolA.language = "Hindi"
// delete  // dot notation and bracket notation
// delete amolA.city
// delete amolA['city']

class personB {

//properties
constructor(fn,ln,ag,rn){
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.RollNO = rn
}
//method
displayName(){
    console.log(this.firstName + this.lastName)

}
}
let amolB = new personB("amolB","RaoB",34,55)
console.log(amolB)
amolB.city ="pune"
amolB.displayName()

// set and get method
class personC{
// properties value - set
 setAge(ag){
  this.age = ag
}
 setRollNo(rn){
  this.RollNo = rn
}
 setFirstName(fn){
  this.firstName = fn
 }
 setlastName(ln){
  this.lastName = ln
 }
//  properties value - get
getAge(){
  console.log(this.age)
}

getRollNo(){
  console.log(this.rollNo)
}

getFirstName(){
  console.log(this.firstName)
}

getLastName(){
  console.log(this.lastName)
}

}

let amolC = new PersonC()
console.log(amolC)

amolC.setAge(13)
amolC.setFirstName("chinmay")
amolC.setLastName("despande")
amolC.setRollNo(23)
console.log(amolC)

amolC.getAge()
amolC.getFirstName()
amolC.getLastName()
amolC.getRollNo()

// program 4


let info = {
fullName:'chinmay',
lastName:'deshpande'
}
info.city = "pune"


// set and get


class PersonD {

set firstN(fn){
  this.firstName = fn
}
get firstN(){
  return this.firstName
}


set lastN(ln){
  this.lastName = ln
}
get lastN(){
return this.lastName 
}

set Age(ag){
  this.age = ag
}
get Age(){
 return this.age
}
set RollN(rn){
  this.rollNo = rn
}
get RollN(){
  return this.rollNo
}

}

let amolD = new PersonD()

amolD.Age = 12
amolD.lastN = "deshpande"
amolD.firstN = "chinmay"
amolD.RollN = 34

console.log(amolD)

console.log(amolD.Age)
console.log(amolD.lastN)
console.log(amolD.firstN)
console.log(amolD.RollN)


