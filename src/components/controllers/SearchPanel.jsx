import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SearchPanel extends Component {
    state = {
        term: ""
    }
    handleSearch = (e) => {
        e.preventDefault();
        this.setState({ term: e.target.value });
        console.log(this.state)
    }
    performSearch(e, keyword) {
        e.preventDefault();
        this.props.handleSearch(keyword);
    }
    render() {
        return (
            <>
                <form className="form d-flex my-3 p-3"
                    onSubmit={(e) => this.performSearch(e, this.state.term)}>
                    <input type="text"
                        value={this.state.term}
                        onChange={this.handleSearch}
                        name="text"
                        placeholder="Enter Text"
                        className="form-control mr-1" />

                    {/* <input type="submit"
                            onClick={handleSearch}
                            className="btn btn-success"
                            value="Search"
                        /> */}
                    <button
                        onClick={(e) => this.performSearch(e, this.state.term)}

                        className="btn btn-success"> Search </button>
                </form>
            </>)
    }
}


SearchPanel.propTypes = {
    term: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired
}

export default SearchPanel

