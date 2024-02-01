// //program 1
// class student{
//     constructor(fn,ln,rollNo){
//         this.firstName = fn
//         this.lastName = ln
//         this.RollNo = rollNo
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// class Teacher{
//     constructor(fn,ln,rollNo,sl){
//         this.firstName = fn
//         this.firstName = fn
//         this.lastName = ln
//         this.RollNo = rollNo
//         this.salary = sl
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
//     displaySalary(){
//         console.log(this.salary)
//     }
// }
    
// let amolT = new Teacher("amolT","Rao",12,55)
// console.log(amolT.firstName)
// console.log(amolT.lastName)
// console.log(amolT.rollNo)
// console.log(amolT.salary)

// amolT.displaySalary()
// amolT.displayName()

// let amol = new student("chinmay","deshapande",7)
// console.log(amol.firstName)
// console.log(amol.lastName)
// console.log(amol.RollNo)
// amol.displayName()

// program 2

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
//     salary = 10000
//     displaySalary(){
//         console.log(this.salary)
//     }
// }
// let pallavi = new Teacher("pallavi","jondhale",123)
// console.log(pallavi.firstName)
// console.log(pallavi.lastName)
// console.log(pallavi.adharNo)
// console.log(pallavi.salary)
// pallavi.displayName()
// pallavi.displaySalary()

// program 3
// class StudentB{
//     constructor(fn,ln,adharNo){
//         this.firstName = fn
//         this.lastName = ln
//         this.adharNo = adharNo
//     } 
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// class TeacherB extends StudentB{
//     constructor(fn,ln,adharNo,salary){
//         super(fn,ln,adharNo)
//         this.salary = salary
//     }
//     displaySalary(){
//         console.log(this.salary)
//     }
// } 
// let pallaviB = new TeacherB("pallaviB","jondhaleB",34,543534)
// console.log(pallaviB.firstName)
// console.log(pallaviB.lastName)
// console.log(pallaviB.adharNo)
// console.log(pallaviB.salary)
// pallaviB.displayName()
// pallaviB.displaySalary()

// // program 4
// class GrandFather{
//     constructor(fn,ln){
//         this.firstName = fn
//         this.lastName = ln
//     }
//     displayGName(){
//         console.log(this.firstname +this.lastName)
//     }
// }
// class Father extends GrandFather{
//     constructor(fn,ln,ffn){
//         super(fn,ln)
//         this.fname = ffn
//     }   
//     displayFName(){
//         console.log(this.fname + this.lastName)
//     }

// }
// class Son extends Father{
//     constructor(fn,ln,ffn,ssn){
//         super(fn,ln,ffn)
//         this.sname = ssn
//     }
//     displaySName(){
//         console.log(this.sname + this.lastName)
    // }
// }

// let amol = new Son("dhondiba","jondhale","parasram","pallavi")
// console.log(amol.firstName)
// console.log(amol.lastName)
// console.log(amol.fname)
// console.log(amol.sname)

// amol.displayFName()
// amol.displaySName()
// amol.displayGName()

// // program 5


class Mother {
    constructor(fn, ln) {
        this.firstName = fn
        this.lastName = ln
    }

    displayMname() {
        console.log(this.firstName + this.lastName)
    }

}

class Son extends Mother {
    constructor(fn, ln, sn) {
        super(fn, ln)
        this.sname = sn
    }

    displaySName(){
        console.log(this.sname + this.lastName)
    }

}

class Daughter extends Mother {
    constructor(fn, ln, dn) {
        super(fn, ln)
        this.dname = dn
    }

    displayDName(){
        console.log(this.dname + this.lastName)
    }

}


let pallaviS = new Son("Ashvini","jondhale","pallavi")
let gauriS = new Daughter("Ashvini","jondhale","gauri")

console.log(pallaviS.firstName)
console.log(pallaviS.lastName)
console.log(pallaviS.sname)

pallaviS.displayMname()
pallaviS.displaySName()

console.log(gauriS.firstName)
console.log(gauriS.lastName)
console.log(gauriS.dname)

gauriS.displayMname()
gauriS.displayDName()