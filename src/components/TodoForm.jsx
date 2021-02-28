import React, { useRef, useEffect, useState } from 'react'

export default function TodoForm(props) {
    const [input, setinput] = useState(props.edit ? props.edit.value : '');
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    });
    const handleChange = e => setinput(e.target.value);
    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });
        setinput("");
    }

    return (
        <form onSubmit={handleSubmit}>
            { props.edit ? <>
                <input type="text" placeholder="Input Task here..."
                    className="todo-input" ref={inputRef} onChange={handleChange} value={input} />
                <input type="submit" value="Update Todo" className="todo-button" />
            </> : <>
                    <input type="text" placeholder="Input Task here..."
                        className="todo-input" ref={inputRef} onChange={handleChange} value={input} />
                    <input type="submit" value="Add Todo" className="todo-button" />
                </>}
        </form>
    )
}
