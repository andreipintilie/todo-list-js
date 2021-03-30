let toggleView = 0

const form = document.getElementById('form')
const addTaskInput = document.getElementById('app__add_task')
const todosUL = document.getElementById('app__each_task')

const todos = JSON.parse(localStorage.getItem('todos'))

if(todos){
    todos.forEach(todo => addTodo(todo))
}

const inputContainer = document.getElementById('app__input_container')
const toggleViewButton = document.getElementById('app__toggle_view')

function updateLS(){
    todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('task--done')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    addTodo()
})

function addTodo(todo){
    let todoText = addTaskInput.value

    if(todo){
        todoText = todo.text
    }

    if(todoText){
        if(todoText.length >= 3){
            const todoEl = document.createElement('li')
            todoEl.setAttribute("class", "app__task")
            todoEl.setAttribute("title", "Click to (un)mark task as done.")
    
            if(todo && todo.completed){
                todoEl.classList.add('task--done')
            }
            todoEl.innerText = todoText
    
            todoEl.addEventListener('click', () => {
                todoEl.classList.toggle('task--done')
                updateLS()
            })
            todoEl.addEventListener('contextmenu', (e) => {
                e.preventDefault()
    
                todoEl.style.transition = 'all 0.3s ease-in-out'
                todoEl.style.cursor = 'context-menu'
                todoEl.style.opacity = '0'

                setTimeout(() => {
                    todoEl.remove()
                    updateLS()
                }, 500)
            })

            setTimeout(() => {
                todosUL.appendChild(todoEl)
                updateLS()
            }, 500)
            addTaskInput.value = ''
        }
        else
        {
            
            inputContainer.classList.toggle('animation--start')
            setTimeout(() => inputContainer.classList.toggle('animation--start'), 600)
        }
    } 
    else 
    {
        inputContainer.classList.toggle('animation--start');
        setTimeout(() => inputContainer.classList.toggle('animation--start'), 600)
    }
}

document.onkeydown = function(e){
    if (e.ctrlKey && e.key == 'b') toggleViewButton.click()
}

toggleViewButton.onclick = () => {
    if(toggleView == 0){
        document.querySelector('#wrapper').style.height = "60vh";
        document.querySelector('#wrapper').style.transition = "all 0.5s ease";
        document.querySelector('.app__toggle_icon').style.transform = "rotate(-180deg)";
        document.querySelector('.app__toggle_icon').style.transition = "all 0.5s ease";
        toggleView = 1;
    }
    else{
        document.querySelector('#wrapper').style.height = "100vh";
        document.querySelector('#wrapper').style.transition = "all 0.5s ease-in-out";
        document.querySelector('.app__toggle_icon').style.transform = "rotate(0)";
        document.querySelector('.app__toggle_icon').style.transition = "all 0.5s ease";
        toggleView = 0;
    }
};