# To-Do List Web Application with Data-saving

## How to install

```
git clone <project_url>
```

## How to use

- Click a task to mark/unmark it as done.
- Right-Click a task to remove it from the DOM.
- CTRL + B to toggle the view.

## Technologies

- HTML
- SCSS
- Bootstrap
- Javascript ES6

## How are the tasks stored

The tasks are stored in a list of objects:

```js
const todos = []

todosEl.forEach(todoEl => {
    todos.push({
        text: todoEl.innerText,
        completed: todoEl.classList.contains('task--done')
    })
})
```

And then stored in the local storage, like so:

```js
localStorage.setItem('todos', JSON.stringify(todos))
```

Because I used `JSON.stringify(todos)`, the output will look like an object, but it's going to be a string actually.

That's why we have to parse it to be interpreted as an object again:

```js
const todos = JSON.parse(localStorage.getItem('todos'))
```

## About
To-Do List Web Application with Data-saving.
