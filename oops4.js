// oops

// Encapsulation
// Inheritance
// polymorphism

// program -1 //incorrect way

// class Student {
//     constructor(fn,ln,adharNo){
//         this.firstName = fn
//         this.lastName = ln
//         this.adharNo = adharNo
//     }
// }

// let pallavi = new Student("pallavi","jondhale",25)
// console.log(pallavi)

// class Teacher {
//     constructor(fn,ln,adharNo,salary){
//         this.firstName = fn
//         this.lastName = ln
//         this.adharNo = adharNo
//         this.salary = salary
//     }

// }
// let amol = new Teacher("amol","rao",234,10000)
// console.log(amol)

// program2

// class Student {
//     constructor(fn,ln,adharNo){

//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Teacher extends Student{
//     salary = 10000
// }

// let chinmay = new Teacher("chinmay","deshpande",233)
// console.log(chinmay.firstName)
// console.log(chinmay.lastName)
// console.log(chinmay.adharNo)
// console.log(chinmay.salary)
// chinmay.displayName()

// program3

// class Student{
//     constructor(fn,ln,adharNo){
//         this.firstName = fn
//         this.lastName = ln
//         this.adharNo = adharNo
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Teacher extends Student{
//     constructor(fn,ln,adharNo,salary){
//         super(fn,ln,adharNo)
//         this.salary = salary
//     }
//     displaySalary(){
//         console.log(this.salary)
//     }
// }

// let shakti = new Teacher("shakti","sharma",123,6789046757)

// console.log(shakti.firstName)
// console.log(shakti.lastName)
// console.log(shakti.adharNo)
// console.log(shakti.salary)

// shakti.displayName()
// shakti.displaySalary()

// program 4
//   single Inheritance 
//  class GrandFather {
//     constructor(fn,ln){
//         this.firstName = fn
//         this.lastName = ln
//     }
//     displayGName(){
//         console.log(this.firstName + this.lastName)
//     }
//  }

//  class Father extends GrandFather {
//     constructor(fn,ln,ffn){
//         super(fn,ln)
//         this.fname = ffn
//     }
//     displayFName(){
//         console.log(this.fname + this.lastName)
//     }
//  }

//  let shirish = new Father("monohar","deshpande","shirish")

//  console.log(shirish.firstName)
//  console.log(shirish.lastName)
//  console.log(shirish.fname)

//  shirish.displayFName()
//  shirish.displayGName()   

// program5
// multi -level inheritance

class GrandFatherB {
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }
    displayGName(){
        console.log(this.firstName + this.lastName)
    }
}
class FatherB extends GrandFatherB{
    constructor(fn,ln,ffn){
        super(fn,ln)
        this.fname = ffn
    }
    displayFName(){
        console.log(this.fname + this.lastName)
    }
}

class SonB extends FatherB{
    constructor(fn,ln,ffn,ssn){
        super(fn,ln,ffn)
        this.sname = ssn
    }
    displaySName(){
        console.log(this.sname + this.lastName)
    }
}
let chinmay = new SonB("monohar","deshpande","shirish","chinmay")

chinmay.firstName
chinmay.lastName
chinmay.tName
chinmay.sName

chinmay.displayFName()
chinmay.displayGName()
chinmay.displaySName()

// herarchial inheritance

class Mother {
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }
    displayMName(){
        console.log(this.firstName + this.lastName)
    }
}

class Son extends Mother{
    constructor(fn,ln,sn){
        super(fn,ln)
        this.sname = sn
    }
    displaySName(){
        console.log(this.sname + this.lastName)
    }
}
class Daughter extends Mother{
    constructor(fn,ln,dn){
        super(fn,ln)
        this.dname = dn
    }
    displayDName(){
        console.log(this.dname + this.lastName)
    }
}
let chinmaye = new Son("kanchan","deshpande","chinmay")
let gauri    = new Daughter("kanchan","deshpande","gauri")


chinmaye.firstName
chinmaye.lastName
chinmaye.sname

chinmaye.displayMName()
chinmaye.displaySName()


gauri.firstName
gauri.lastName
gauri.dname

gauri.displayMName()
gauri.displayDName()