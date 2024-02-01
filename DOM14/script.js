// program 1

// id
let htmlOne = document.querySelector('#one')
let getElementById = document.getElementById('one')

console.log(htmlOne)
console.log(getElementById)

// program 2

// class

let byclassName = document.querySelector('.two')
console.log(ByClassName)

 let allElementNodeList = document.querySelectorAll('.fruits')
 console.log(allElementNodeList)
    
//  selecting the element

let addButton = document.querySelector('button')
addButton.addEventListener('click',function(){
    for(let i = 0; i <allElementNodeList.length; i++){
        // console.log(i)
          console.log(allElementNodeList[i])
    }

})

allElementHTMLCollection = document.getElementsByClassName('fruits')
console.log(allElementHTMLCollection)

// program 3
// tagName
// <h1 id = "one">Hello</h1>
let byTagName = document.querySelector('h1')
let allElementWithTagLi = document.querySelectorAll('li')
console.log(allElementWithTagLi)

let allElementWithTagLiHTMLCollection = document.getElementsByTagName('li')
console.log(allElementWithTagLiHTMLCollection)

// program 4
let byClassName = document.querySelector('[name="fr"]')
console.log(byClassName)

let byNameNodeList = document.querySelectorAll('[name="fr"]')
console.log(byNameNodeList)

let byNameNodeList2 = document.getElementsByName('fr')
console.log(byNameNodeList2)
