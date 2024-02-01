/* <h1 id="one">Javascript</h1>
    <p class="two">I am learning Javascript</p>
    <p name="three">I am learning python</p>
    <ul>
        <li class="it">Front End</li>
        <li class="it">Back End</li>
        <li class="it">SQL</li>
    </ul> */

    // program1

    // let byld=
    // document.querySelector('#one')
    // console.log(byld)

    // let byGetld=
    // document.getElementById('one')
    // console.log(byGetld)

    // // program 2

    // document.querySelector()
    // document.querySelectorAll()
    
    let byClassName = document.querySelector('.it') // single element
    let byClassNames = document.querySelectorAll('.it') // multiple element
    console.log(byClassName)
    console.log(byClassNames) // node list

    for(let i = 0 ; i < byClassNames.length ; i++){
    console.log(i)       
    console.log(byClassNames[i])
    byClassNames[i].style.color = "red"
    }

// // program 3
 let allFe = document.querySelectorAll('.fe') // nodelist
 console.log(allFe)
 for(let i = 0; i < allFe.length; i++){
  if(i % 2 == 0){
    allFe[i].style.color ="purple"
 }
  else {
    allFe[i].style.color ="green"
  }
 }

//  let allFeByHTMLC = document.getElementsByClassName('fe')
//  console.log(allFeByHTMLC)

//  for(let i = 0; i < allFeByHTMLC.length; i++){
// console.log(i)
// console.log(allFeByHTMLC[i])
// allFeByHTMLC[i].style.color ="red"
//  }
// html collection and node list

//  program 4
 let byNodeList =   document.querySelectorAll('.be')
console.log(byNodeList)







