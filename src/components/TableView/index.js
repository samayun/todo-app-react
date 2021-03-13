import React from 'react'
import PropTypes from 'prop-types'

const TableItem = ({ todo, toggleSelect, toggleComplete, theme }) => {
    const themedColor = theme => theme === 'light' ? "black" : "#fff"

    return (
        <tr >
            <td>
                <input
                    type="checkbox"
                    name=""
                    id={todo.id}
                    checked={todo.isSelect}
                    onChange={() => toggleSelect(todo.id)} />
            </td>
            <td>
                <div className="mx-3">
                    <h4 style={{ color: themedColor(theme), lineBreak: 'normal', textDecoration: todo.isComplete && 'line-through' }} > {todo.text}</h4>
                    <p style={{ color: themedColor(theme), textDecoration: todo.isComplete && 'line-through' }}> {todo.time?.toDateString()} </p>
                </div>
            </td>
            <td>
                <button
                    className={todo.isComplete ? "btn ml-auto btn-danger" : "btn ml-auto btn-success"}
                    onClick={() => toggleComplete(todo.id)}
                > {todo.isComplete ? "Completed" : "Running"}
                </button>
            </td>
        </tr >
    )
}
TableItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}

function TableView({ todos, toggleSelect, toggleComplete, theme }) {
    return (
        <table className="table">
            <thead className={`thead-${theme}`}>
                <tr>
                    <th> <input
                        type="checkbox" /> </th>
                    <th> Task </th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {todos.map(todo => <TableItem todo={todo} key={todo.id} toggleComplete={toggleComplete} theme={theme}
                    toggleSelect={toggleSelect} />)}
            </tbody>
        </table>
    )
}
TableView.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}


export default TableView
