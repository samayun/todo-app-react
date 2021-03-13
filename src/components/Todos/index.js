import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListView from '../ListView'
import TableView from '../TableView'
import Controller from '../controllers'

export default function Todos() {
    const todosArr = [
        {
            id: 2,
            text: "Old",
            time: new Date(),
            isComplete: false,
            isSelect: true
        },
        {
            id: "3",
            text: "Two",
            time: new Date(),
            isComplete: true,
            isSelect: false
        }
    ]
    const [todos, setTodos] = useState(todosArr);
    const [isTableView, setisTableView] = useState(true);

    // GLOBAL STATE SHOULD USE ReduX or Context API 
    const [theme, setTheme] = useState("light");
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpenTodoForm, setIsOpenTodoForm] = useState(false);
    const [filter, setFilter] = useState("all");


    const toggleSelect = todoId => {
        let newTodos = todos.filter(todo => {
            if (todoId === todo.id) {
                todo.isSelect = !todo.isSelect;
            }
            return todo;
        })
        setTodos(newTodos);
        console.log(`%c ${todoId} selected`, '{ color: "red" }');
    }
    const toggleComplete = todoId => {
        let newTodos = todos.filter(todo => {
            if (todoId === todo.id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(newTodos);
        console.log(`${todoId} completed`);
    }
    const toggleForm = () => {
        setIsOpenTodoForm(!isOpenTodoForm);
    }
    const createTodo = todo => {
        setTodos([{
            ...todo,
            id: Math.floor(Math.random() * 1000),
            time: new Date()
        }, ...todos])
    }

    const handleSearch = (key) => {
        setSearchTerm(key);
    }
    const performSearch = (k) => {
        console.log({ s: todos.filter(todo => todo.text.toLowerCase().includes(k.toLowerCase())) });

        return todos.filter(todo => todo.text.toLowerCase().includes(k.toLowerCase()))
    }
    const handleFilter = type => {
        setFilter(type);
    }
    const performFilter = type => {
        let newTodos = [];
        if (type === "completed") {
            newTodos = todos.filter(todo => todo.isComplete)
        } else if (type === "running") {
            newTodos = todos.filter(todo => !todo.isComplete)
        } else {
            newTodos = todos.map(t => t);
        }

        return (newTodos)
    }

    const clearCompleted = e => {
        setTodos(todos.filter(todo => !todo.isComplete))
    }
    const clearSelected = e => {
        setTodos(todos.filter(todo => !todo.isSelect))
    }
    const reset = e => {
        console.log(e);
        setSearchTerm("");
        setTodos([]);
    }
    const getView = () => {
        let mytodos = performFilter(filter)
        mytodos = performSearch(searchTerm);

        return isTableView ? (
            <TableView
                todos={mytodos}
                theme={theme}
                toggleComplete={toggleComplete}
                toggleSelect={toggleSelect} />
        ) : (
                <ListView
                    todos={mytodos}
                    theme={theme}
                    toggleComplete={toggleComplete}
                    toggleSelect={toggleSelect} />
            )

    }

    return (
        <div className={theme === 'dark' ? "container bg-dark" : "container bg-light"}>
            <h2 className="display-4 text-center" style={
                theme === 'light' ? { "color": "gray" } : { "color": "white" }
            }> Smart Todo App </h2>
            <div className="text-center my-3">
                <button className="btn btn-success mr-2" onClick={() => setisTableView(!isTableView)}> Toggle Table </button>
                <button className={`btn btn-${theme === 'dark' ? "dark" : "light"}`} onClick={() => setTheme(theme === 'dark' ? "light" : "dark")}> Toggle Theme </button>
            </div>

            <Controller
                term={searchTerm}
                handleSearch={(handleSearch)}
                toggleForm={toggleForm}
                createTodo={createTodo}
                clearCompleted={clearCompleted}
                clearSelected={clearSelected}
                reset={reset}
                handleFilter={handleFilter}
            />

            {getView()}
        </div>
    )
}
