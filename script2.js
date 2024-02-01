let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}
console.log(chinmay.firstName)
console.log(chinmay.lastName)
chinmay.display()

let amol ={
    firstName:"amol",
    lastName:"rao",
}

//method Borrow
amol.display = chinmay.display
amol.display()

// //call, bind and apply
// let display = function(){
//     console.log(this.firstName + this.lastName)
// }
// let ram ={
//     firstName:"ram",
//     lastName:"dani"
// }
// let sham ={
//     firstName:"sham",
//     lastName:"sharma"
// }
// let riya ={
//     firstName:"riya",
//     lastName:"singh"
// }
// //let k = display.bind(riya)
// //   let k = function(){
    //console.log(riya.firstName + riya.lastName)
  
//k()

//s = display.bind(sham)
//s()

// r = display.bind(ram)
// r()

//program 2 call

// let display = function(greet){
//     console.log(this.firstName + this.lastName)
//     console.log(`${greet}`)
// }
// let ram ={
//     firstName:"ram",
//     lastName:"dani"
// }
// let sham ={
//     firstName:"sham",
//     lastName:"sharma"
// }
// let riya ={
//     firstName:"riya",
//     lastName:"singh"
// }
// display.call(riya,"gm")
// display.call(sham,"ge")
// display.call(ram,"ga")

// apply

// let display = function(arr){
//     console.log(this.firstName + this.lastName)
//     console.log('${arr[0]} ${arr[1]} ${arr[2]}')
// }
// let ram ={
//     firstName:"ram",
//     lastName:"dani"
// }
// let sham ={
//     firstName:"sham",
//     lastName:"sharma"
// }
// let riya ={
//     firstName:"riya",
//     lastName:"singh"
// }
// display.call(riya,["GM","GN","GA"])
// display.call(sham,["HELLO","HII","BYE"])
// display.call(ram),["A","B","c"]



