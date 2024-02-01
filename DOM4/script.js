// selection the elements

let headOne = document.querySelector('h1')
let buttonChange = document.querySelector('button')

// based on the user action , changing the style
buttonChange.addEventListener('click',function(){
    headOne.style.color = "red"
    headOne.textContent = "red"
})