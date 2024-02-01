/* <h1 id = "one">Red</h1> */
let headOne = document.querySelector('h1')
console.log(headOne)

// console.log(headOne.textcontent)
// headOne.textcontent = "Green"

headOne.addEventListener('click', function(){
    headOne.textcontent = "Green"
    headOne.style.color = "green"
})