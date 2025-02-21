let textColor = document.getElementById(`color`)
let textSize = document.getElementById(`size`)
let text = document.getElementById(`text`)
let buttonColor = document.getElementById(`buttonColor`)
let buttonSize = document.getElementById(`buttonSize`)

buttonColor.addEventListener(`click`, () => {
    text.style.color = textColor.value
})
buttonSize.addEventListener(`click`, () => {
    text.style.fontSize = textSize.value+`px`
})

// buttonColor.addEventListener(`click`, function(){
//     text.style.color = textColor.value
// })
// buttonSize.addEventListener(`click`, function(){
//     text.style.fontSize = textSize.value+`px`
// })



// Za da napravime na eden klick da se menuvaat i boja i size, treba da se napravat posebni dve funkcii za toa i da se povikaat preku eden event listener.