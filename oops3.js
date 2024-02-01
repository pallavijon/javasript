// class people{
//     firstName = "pallavi"
//     lastName = "jondhale"
//     age = 14
//     rollNo = 34
// }

// let sonu = new people()
// let pallavi = new people()

// console.log(sonu)
// console.log(pallavi)

// program 2

// class Person {
//     // property and methods
//     constructor(fn,ln,ag,rn){
//         this.firstName = fn
//         this.lastName = ln
//         this.age = ag
//         this.rollNo = rn
//         this.display = function(){
//             console.log("hello")
//         }
//     }
// }
// let amol = new Person("pallavi","jondhale", 34,5)

// //  setter and getter method
//  class PersonB {
//     setfirstName(fn){
//         this.firstName = fn
//     }
//     getfirstName(fn){
//         return this.firstName
//     }
//     setlastname(ln){
//         this.lastName = ln
//     }
//     getlastName(ln){
//         return this.lastName
//     }
//  }

//  let sonu2 = new PersonB
//      console.log(sonu2)
//      sonu2.setfirstName("pallavi")
//      sonu2.setlastname("jondhale")
//      console.log(sonu2)
//      console.log(sonu2.getfirstName())
//      console.log(sonu2.getlastName())

//      class PersonC {
//         set first_name(fn){
//             this.firstName = fn
//         }
//         get first_name(){
//             return this.firstName
//         }
//         set last_name(ln){
//             this.lastName = ln
//         }
//         get last_name(){
//             return this.lastName
//         }
//      }
//       let sonuk = new PersonC()

//       sonuk.first_name ="sonuk"
//       console.log(sonuk.first_name)
//       sonuk.last_name ="jondhale"
//       console.log(sonuk)

class Bank {
    constructor(fullN,bal){
        this.fullName  = fullN
        this.bal = bal
        this.transaction = []
    }

    withDrawl(amt){
        if(this.bal > amt){
            this.bal = this.bal - amt 
            this.transaction.push(-amt)
            return this.bal
        }
        else {
            console.log('Insufficient fund')
        }
    }

    deposit(amt){
        this.bal = this.bal + amt
        this.transaction.push(amt)
        return this.bal
    }

    lastFiveTransaction(){
        return this.transaction.slice(-5)
    }   

}

let pallaviF  = new Bank("pallavi jondhale",10000000)
//chinmayF.withDrawl(10000000000000)
pallaviF .deposit(10000)
pallaviF .deposit(10000)
pallaviF .deposit(10000)
pallaviF .deposit(10000)
pallaviF .deposit(10000)
pallaviF .withDrawl(100)
pallaviF .withDrawl(100)
pallaviF .withDrawl(100)
pallaviF .withDrawl(100)
pallaviF .withDrawl(100)

console.log(pallaviF .lastFiveTransaction() ) 