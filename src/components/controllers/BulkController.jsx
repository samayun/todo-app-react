import React from 'react'

export default function BulkController({ clearCompleted, reset, clearSelected }) {
    return (
        <div className="">
            <button
                className="btn btn-secondary"
                onClick={() => clearCompleted()}> ClearCompleted </button>
            <button
                className="btn btn-primary"
                onClick={() => clearSelected()}>ClearSelected </button>
            <button
                className="btn btn-dark"
                onClick={() => reset()}> Reset </button>
        </div>
    )
}
