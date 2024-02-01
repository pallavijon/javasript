//program1

class Calculator{
    addition(x,y){
        console.log(x + y)
    }
    addition(x, y, z){
        console.log(x + y + z)
    }
    addition(x,y,z,a){
        console.log(x + y + z + a)
    }
}
let add = new Calculator()
add.addition(12,3)
add.addition(12,3,4)
add.addition(12,3,4,5)

//program2
class CalculatorB{
    addition(x,y,z,a){
        if (x != undefined&& y != undefined&& z != undefined&& a !=undefined){
            console.log(x + y + z + a)
        }
        else if(x != undefined&& y != undefined&& z != undefined){
             console.log(x + y + z)
        }
        else if(x != undefined&& y != undefined){
            console.log(x + y)
        }

  }
}
 let addB = new CalculatorB()
 addB.addition(12,3)
 addB.addition(12,3,4)
 addB.addition(12,3,4,3)

//  program3

class WorldBank{
    save(){
        console.log("I am save from worldBank")
    }
    loan(){
        console.log(" I am loan from WorldBank")
    
    }
}

class SBI extends WorldBank{
    save(){
        console.log("I am save from SBI")
        super.save()
    }
    loan(){
        console.log("I am loan from SBI")
        super.loan()
    }

}
let h =new SBI()
h.loan()
h.save()



