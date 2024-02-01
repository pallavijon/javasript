let students = [
    {
    firstName:"chinmay",
    lastName:"deshpande",
    age:25,
    skills:["python","django","javascript","cypress"],
    city:"pune"
    },

    {
    firstName:"amol",
    lastName:"rao",
    age:33,
    skills:["python","javascript","playwright"],
    city:"banglore"
    },
{
    firstName:"rasika",
    lastName:"kulkarni",
    age:30,
    skills:["msbi","sql",],
    city:"nashik"
},
]

// console.log(students[0].firstName)
// console.log(students[0]['lastName'])

// program 1

// for loop
// print name of all students

// for(let i=0;i<students.length;i++){
//     console.log(students[i]['firstName'])
// }

// students.forEach(function(el){
//     console.log(el.firstName)
// })

// program 2
// name:no Of skills
//rasika:2
// students.forEach(function(el){
//     console.log(el.firstName+":"+el.skills.length)
// })

// program 3
// "promot engineer to all user"
// students.forEach(function(el){
//     el.skills.push("prompt engineer")
// })
//  console.log(students)

// program 4
//average age all students
// let sumOfAge=
// students.reduce(function(acc,el){
//     return acc + el.age
// },0)
// console.log(sumOfAge/students.length)

// program 5
// print name of students with python skill

students.forEach(function(el){

    if(el.skills.includes("python")){
        console.log(el.firstName)
    }
})