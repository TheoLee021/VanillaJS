const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-form input");

let toDos = [];
const TODOS_KEY = "todos";

// save toDos to localStorage as a string
function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

// add a new todo to the todoList and save it to localStorage
function addTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

// handle the submit event of the todoForm
function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    addTodo(newTodoObj);
    saveToDos();
}

// handle the click event of the delete button
function deleteTodo(event) {
    const li = event.target.parentElement;
    // get li's id
    const deleteId = li.id;
    // delete the todo item from the todoList array
    li.remove();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(addToDo);
}