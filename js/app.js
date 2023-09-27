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
    } else {
        showMessege('message-create', 'Please, Enter some text...')
    }
})