const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDosL = [];
let idNumbers = 1;

function deleteToDo (event) {
    const btn = event.target;
    const faterLi = btn.parentNode;
    toDoList.removeChild(faterLi);

    const cleanToDos = toDosL.filter((toDo) => toDo.id !== parseInt(faterLi.id));
    toDosL = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDosL));
}

function paintToDo (text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = idNumbers++;

    delBtn.innerText = "❌";

    delBtn.addEventListener("click", deleteToDo);
    
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text,
        id: newId
    };
    toDosL.push(toDoObj);

    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDo() {
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null) {
        const parsedToDos = JSON.parse(toDos);
        parsedToDos.forEach((toDo) => {paintToDo(toDo.text)});
    } 
}

function init() {
    loadToDo();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();