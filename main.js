let addToDoButton = document.getElementById('addToDo')
let toDoContainer = document.getElementById('toDoContainer')
let inputText = document.getElementById('inputText')
let clearBtn = document.getElementById('clearToDo')
addToDoButton.addEventListener('click', function () {
    let paragraph = document.createElement('p')
    paragraph.classList.add('to-dos')
    toDoContainer.appendChild(paragraph)
    paragraph.innerHTML = inputText.value
    inputText.value = "";



    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = 'red line-through'

    })
    paragraph.addEventListener('dblclick', function () {
        paragraph.style.textDecoration = 'none'
    })

    clearBtn.addEventListener('click', function () {
        toDoContainer.removeChild(paragraph)
    })
})

