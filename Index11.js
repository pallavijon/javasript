//program 1
//                 0    1    2    3
// let birthYear = [1989,1990,1991,1992]
// let ages = [] // [ 34 33]
// // [34,33,32,31]


// for (let i = 0 ; i < 4 ; i++){
//     // console.log(i)
//     //console.log(birthYear[i])
//     // console.log(2023 - birthYear[i])
//     let x = 2023 - birthYear[i]
//     ages.push(x)
// }
//      console.log (ages)

//program -2
//               0  1  2  3  4  5  6
// let marks = [88,89,67,45,99,53,26]
// let above60 = [] //[88,89]
// // [88,89,67,99]

// for (let i = 0 ; i < marks.length ; i++){
//     //console.log(i)
//     //console.log(marks[i])
//     if (marks[i] > 60) {
//         above60.push(marks[i])
//     }
// }
//      console.log(above60)

// program 3

//             0  1  2
// let number = [11,22,33] //66
// let total = 0

// for(let i = 0 ; i < number.length ; i++){
//     // console.log(i)
//     // console.log(number[i])
//     total = total + number[i]
//             //   0   + 11    --- 11
//             //   11  + 22    --- 22
//             //   33  + 33    --- 66
// }
//      console.log(total)

// program 4
//               0           1            2           3
let cities = ["mumbai" , "banglore" , "chennai" , "koltata"]
for(let i = 0 ; i < cities.length ; i++){
    //console.log(i)
    console.log("welcome" + cities[i])
}