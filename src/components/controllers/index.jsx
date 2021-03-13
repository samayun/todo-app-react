import React from 'react'
import PropTypes from 'prop-types'

import SearchPanel from './SearchPanel'
import CreateTodoForm from '../Create-Todo-Form'
import BulkController from './BulkController'
import FilterController from './FilterController'

function Controller({ term, handleSearch, toggleForm, createTodo, clearCompleted, reset, clearSelected, handleFilter }) {
    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <SearchPanel
                        term={term}
                        handleSearch={handleSearch}
                        toggleForm={toggleForm}
                    />
                </div>
                <div className="col-md-6">
                    <CreateTodoForm
                        createTodo={createTodo} />
                </div>
            </div>
            <div className="row my-3 text-center">

                <div className="col-md-6">
                    <FilterController
                        handleFilter={handleFilter}
                    />
                </div>
                <div className="col-md-6">
                    <BulkController
                        clearCompleted={clearCompleted}
                        clearSelected={clearSelected}
                        reset={reset}
                    />
                </div>
            </div>
        </>
    )
}

Controller.propTypes = {
    term: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired,
    createTodo: PropTypes.func.isRequired
}

export default Controller
