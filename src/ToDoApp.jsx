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

        setTodos(prev => prev.map(item => item.id === todoId ? newValue : item));
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

