import React from 'react'
import { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm';

export default function TodoList({ todos, completeTodo, updateTodo, removeTodo }) {
    const [edit, setEdit] = useState({ id: null, text: "" });
    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({ id: null, value: "" });
    }
    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }
    return todos.map((todo, i) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={i}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)} className="">
                {todo.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine className="delete-icon" onClick={() => removeTodo(todo.id)} />
                <TiEdit className="edit-icon"
                    onClick={() => setEdit({ id: todo.id, value: todo.text })} />
            </div>
        </div>
    ))
}
