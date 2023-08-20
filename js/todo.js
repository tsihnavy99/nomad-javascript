const toDoForm = document.getElementById("todo-form")
const toDoList = document.getElementById("todo-list")
const toDoInput = toDoForm.querySelector("input")

const TODOS_KEY = "todos"

let toDos = []

const saveToDos = () => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

const deleteToDo = (e) => {
    const li = e.target.parentElement
    li.remove()
    
    toDos = toDos.filter((toDo)=>toDo.id!==parseInt(li.id))
    saveToDos()
}

const paintToDo = (newToDo) => {
    const li = document.createElement("li")
    const span = document.createElement("span")
    const btn = document.createElement("button")    

    span.innerText = newToDo.text
    btn.innerText = "X"
    btn.addEventListener("click", deleteToDo)
    btn.classList.add("todoBtn")

    li.appendChild(btn)
    li.appendChild(span)
    li.id = newToDo.id

    toDoList.appendChild(li)
}

const handleToDoSubmit = (e) => {
    e.preventDefault()
    const newToDo = toDoInput.value
    toDoInput.value = ""

    const newToDoObj = {
        username: localStorage.getItem(USERNAME_KEY),
        text: newToDo,
        id: Date.now()
    }
    toDos.push(newToDoObj)
    paintToDo(newToDoObj)
    saveToDos()
}


toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)

if(savedToDos!==null) {
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo)
}