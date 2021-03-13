import React from 'react'
import PropTypes from 'prop-types'

const ListItem = ({ todo, toggleSelect, toggleComplete, theme }) => {
    const themedColor = () => theme === 'light' ? "gray" : "#fff";

    return (
        <li className="list-group-item">
            <input
                type="checkbox"
                name=""
                id={todo.id}
                checked={todo.isSelect}
                onChange={() => toggleSelect(todo.id)} />
            <div className="mx-3">
                <h4 style={{ "color": themedColor }}> {todo.text} </h4>
                <p style={{ "color": themedColor }}> {todo.time?.toDateString()} </p>
            </div>
            <button
                className={todo.isComplete ? "btn ml-auto btn-danger" : "btn ml-auto btn-success"}
                onClick={() => toggleComplete(todo.id)}
            > {todo.isComplete ? "Completed" : "Running"}
            </button>
        </li>
    )
}
ListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}

function ListView({ todos, toggleSelect, toggleComplete, theme }) {
    return (
        <ul className="list-group">
            {todos.map(todo => <ListItem todo={todo} theme={theme} key={todo.id} toggleComplete={toggleComplete}
                toggleSelect={toggleSelect} />)}
        </ul>
    )
}
ListView.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}


export default ListView

