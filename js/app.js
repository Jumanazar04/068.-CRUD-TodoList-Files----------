const formCreate = document.getElementById('form-create')
const formEdit = document.getElementById('form-edit')
const listGroupTodo = document.getElementById
('list-group-todo')
const input = document.getElementById('input-create')
// const messageCreate = document.getElementById('message-create')
const time = document.getElementById('time')
const modal = document.getElementById('modal')
const overlay = document.getElementById('overlay')
/* time elements */
const fullDay = document.getElementById('full-day')
const hourEl = document.getElementById('hour')
const minuteEl = document.getElementById('minute')
const secondEl = document.getElementById('second')
const closeEl = document.getElementById('close')
const messageCreate = document.getElementById('message-create')

function showMessege(where, massege){
    document.getElementById(`${where}`).textContent = massege;
    setTimeout(() => {
        document.getElementById(`${where}`).textContent = ''
    }, 2500)
}

// check 
let todos = JSON.parse(localStorage.getItem('list')) 
    ? JSON.parse(localStorage.getItem('list'))
    : []

    if(todos.length){
         showTodos()
    }
// time
function getTime (){
    const now = new Date()

    const day = now.getDate()
    const month = now.getMonth()
    const year = now.getFullYear()

    console.log(day, month, year);

    
}

getTime()

function showTodos(){
    const todos = JSON.parse(localStorage.getItem('list'))
    listGroupTodo.innerHTML = ''
    todos.forEach((item, i) => {
        listGroupTodo.innerHTML += `
        <li class="list-group-item d-flex justify-content-between">
            ${item.text}
          <div class="todo-icons">
            <span class="opacity-50 me-2">27.09.2023</span>
            <img src="./img/edit.svg" alt="edit" width="25" height="25">
            <img src="./img/delete.svg" alt="edit" width="25" height="25">
          </div>
        </li>
        `
    });
}
function setTodos() {
    localStorage.setItem('list', JSON.stringify(todos))
}
// get Todos 

formCreate.addEventListener('submit', (e) => {
    e.preventDefault()
    const todoText = input.value.trim()
    
    formCreate.reset()
    if (todoText.length) {
        todos.push( { text: todoText, time: '16:20 21.09.2023', completed: false})
        console.log(todos);
        setTodos()
        showTodos()
    } else {
        showMessege('message-create', 'Please, Enter some text...')
    }
})