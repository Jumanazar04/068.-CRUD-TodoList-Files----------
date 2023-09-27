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
const timeContainer = document.getElementById('time-container')

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

    const day = now.getDate() < 10 ? '0' +  (now.getDate() ) : now.getDate();
    const month =
     now.getMonth() < 10 ? '0' +  (now.getMonth() + 1) : now.getMonth();
    const year = now.getFullYear() 

    return `${day}.${month}.${year}`
}

const now = new Date()
const second = now.getSeconds() < 10 ? '0' +  (now.getSeconds() ) : now.getSeconds();

timeContainer.textContent = getTimeOne()


function getTimeOne (){
    const now = new Date()

    const hour = now.getHours() < 10 ? '0' +  (now.getHours() ) : now.getHours();
    const minute = now.getMinutes() < 10 ? '0' +  (now.getMinutes() ) : now.getMinutes(); 
    const second = now.getSeconds() < 10 ? '0' +  (now.getSeconds() ) : now.getSeconds();

    return `${hour}:${minute}`
}

function showTodos(){
    const todos = JSON.parse(localStorage.getItem('list'))
    listGroupTodo.innerHTML = ''
    todos.forEach((item, i) => {
        listGroupTodo.innerHTML += `
        <li class="list-group-item d-flex justify-content-between">
            ${item.text}
          <div class="todo-icons">
            <span class="opacity-50 me-2">${item.time}</span>
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
        todos.push( { text: todoText, time: `${getTimeOne()} ${getTime()}`, completed: false})
        console.log(todos);
        setTodos()
        showTodos()
    } else {
        showMessege('message-create', 'Please, Enter some text...')
    }
})