# To-Do List Web Application with Data-saving

## How to install

```
git clone <project_url>
```

## How to use

- Click a task to mark/unmark it as done.
- Right-Click a task to remove it from the DOM.
- CTRL + B to toggle the view.
- `...`
- If you leave the input unfilled or type less than 3 characters, an animation will be applied to the input.

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

## Images

![Image 1](https://imagizer.imageshack.com/img924/1138/tMlhoI.png)
![Image 2](https://imagizer.imageshack.com/img923/3229/9EZgEJ.png)
![Image 3](https://imagizer.imageshack.com/img924/1378/43tTvT.png)
![Image 4](https://imagizer.imageshack.com/img924/5616/nlTYz9.png)

## About
To-Do List Web Application with Data-saving.
