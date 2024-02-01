// actual difference var const let

let x = 10
console.log(x)
x = 200 //update
console.log(x) //200

const y = 35
console.log(y)
y = 45 //update
console.log(y)

// program 1
//{} block

//let a ={} //object empty

//let const = block scope

{
    let z = 20
    console.log(z) //20
}
  console.log(z) // z is not defined error

// program 2
let y1 = 100
{
    let y1 = 500
    console.log(y1) //500
}
    console.log(y1) //100

// program 3
let x1 = 50 //200
{
    console.log(x1) //50
    x1 = 200
    console.log(x1) //200
}
    console.log(x1) //200

// program 4
{
    const p1 =200
}
    
    console.log(p1) // p1 is not defined

    let r1
    console.log(r1) //undefined

    console.log(y1) //y1 is not defined

// program 5
const k = 500
{
    console.log(k) //500
    k = 700
    console.log(k) //assignment to the const variable

}
    console.log(k) //500

// program 6
{
    var a=78
}
   console.log(a)

   //let and const having block scope and var dont have block scope

   // var having function scope
   
