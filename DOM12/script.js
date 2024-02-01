

let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')
let buttonOne = document.querySelector('#one')

buttonOne.addEventListener('click', function () {
    let text = inputText.value
    let newli = document.createElement('li') // <li><li>
    newli.textContent = text  // <li></li>
    createButtons(newli)
    ulList.appendChild(newli)
    inputText.value = ""

})

function createButtons(li) {
    let r = document.createElement('button')
    r.textContent = "Remove"
    r.classList.add('remove')
    li.appendChild(r)

    let u = document.createElement('button')
    u.textContent = "Up"
    u.classList.add('up')
    li.appendChild(u)

    let d = document.createElement('button')
    d.textContent = "Down"
    d.classList.add('down')
    li.appendChild(d)

}

// remove , up , down

ulList.addEventListener('click', function (event) {
    //console.log(event.target)
    //console.log(event.target.tagName)
    //console.log(event.target.className)

    if (event.target.tagName == "BUTTON") {
        if (event.target.className == "remove") {
            let li = event.target.parentElement
            let ulList = li.parentElement
            ulList.removeChild(li)
        }
        else if (event.target.className == "up") {
            let li = event.target.parentElement
            let ul = li.parentElement
            let preLi = li.previousElementSibling
            if (preLi) {
                ul.insertBefore(li, preLi)
            }
        }
        else if (event.target.className == "down") {
            let li = event.target.parentElement
            let ul = li.parentElement
            let nextLi = li.nextElementSibling
            if (nextLi) {
                ul.insertBefore(nextLi, li)
            }
        }
    }
})