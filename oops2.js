// program1
// class Person{
//     firstName ="chinmay"
//     lastName ="deshpande"
//     age = 34
//     rollNo = 7

// }
// let amol = new Person()
// let chinmay = new Person()
 
//  console.log(amol)
//  console.log(chinmay)

//  amol.firstName ="amol"
//  amol.lastName ="rao"
//  amol.age = 34
//  amol.rollNo = 23
//  console.log(amol)


// //  program2
// class PersonE{
//     constructor(fn,ln,ag,rn){
//         this.firstName = fn
//         this.lastName = ln
//         this.age = ag
//         this.rollNo = rn
//     }
// }

// let amol2 = new PersonE("amol","rao",34,66)
// let chinmay2 = new PersonE("chinmay","deshpande",34,66)
// let kajal2 = new PersonE("kajal2","dule",27,66)

// let students = [amol2,chinmay2,kajal2]
// students.forEach(function(el){
//     console.log(el.firstName)
//     console.log(el.lastName)
//     console.log(el.age)
//     console.log(el.rollNo)
    
// })

// program3

class PersonF{
    setfirstName(fn){
        this.firstName = fn
    }

    getfirstName(){
        console.log(this.firstName)
    }

    setlastName(ln){
        this.lastName = ln
    }

    getlastName(){
        console.log(this.lastName)
    }
}

let kajal3 = new PersonF()
kajal3.setfirstName("kajal")
kajal3.setlastName("dule")
console.log(kajal3)

kajal3.getfirstName()
kajal3.getlastName()
