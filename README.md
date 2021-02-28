# Todo App React

### LIVE SITE: https://todoapp-crud-react.netlify.app

- workspace settings

```json
{
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node_modules/*/**": true
  }
}
```

Dependency Install

- `npx create-react-app todoapp`
- `cd todoapp`
- `yarn start`

- `yarn add react-icons`

### yarn start

```javascript
//ToDoApp.js
import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./style.css";

export default function ToDoApp() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (id == todo.id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => id != todo.id));
  };
  return (
    <div className="todo-app">
      <h1>Whats Your Plan Today</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoList
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}
```

```js
// components/TodoForm.jsx
import React, { useRef, useEffect, useState } from "react";

export default function TodoForm(props) {
  const [input, setinput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });
  const handleChange = (e) => setinput(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });
    setinput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Input Task here..."
            className="todo-input"
            ref={inputRef}
            onChange={handleChange}
            value={input}
          />
          <input type="submit" value="Update Todo" className="todo-button" />
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Input Task here..."
            className="todo-input"
            ref={inputRef}
            onChange={handleChange}
            value={input}
          />
          <input type="submit" value="Add Todo" className="todo-button" />
        </>
      )}
    </form>
  );
}
```

```js
// components/TodoList.jsx
import React from "react";
import { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "./TodoForm";

export default function TodoList({
  todos,
  completeTodo,
  updateTodo,
  removeTodo,
}) {
  const [edit, setEdit] = useState({ id: null, text: "" });
  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({ id: null, value: "" });
  };
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  return todos.map((todo, i) => (
    <div className={todo.isComplete ? "todo-row complete" : "todo-row"} key={i}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)} className="">
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          className="delete-icon"
          onClick={() => removeTodo(todo.id)}
        />
        <TiEdit
          className="edit-icon"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />
      </div>
    </div>
  ));
}
```
