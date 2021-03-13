import React from 'react'

export default function FilterController({ handleFilter }) {
    return (
        <div className="d-flex align-items-center">
            <button
                className="btn btn-warning"
                onClick={() => handleFilter("all")}> All </button>
            <button
                className="btn btn-dark"
                onClick={() => handleFilter("running")}> Running </button>
            <button
                className="btn btn-info"
                onClick={() => handleFilter("completed")}> Completed </button>
        </div>
    )
}
