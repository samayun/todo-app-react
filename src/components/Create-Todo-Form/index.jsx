import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CreateTodoForm extends Component {
    static propTypes = {
        createTodo: PropTypes.func
    }
    state = {
        text: "",
        description: "",
        time: new Date()
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        if (this.state.text && this.state.description) {
            this.props.createTodo(this.state);
            e.target.reset();
            this.setState({
                text: "",
                description: ""
            });
        }
    }
    render() {
        return (
            <form className="form d-flex my-3 p-3" onSubmit={this.handleSubmit}>
                <input type="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                    name="text"
                    placeholder="Enter Text"
                    className="form-control mr-1" />
                <input type="text"
                    value={this.state.description}
                    onChange={this.handleChange}
                    name="description"
                    placeholder="Enter Description"
                    className="form-control mr-1" />
                <input type="submit"
                    className="btn btn-success"
                    value="+Add Todo"
                    disabled={!this.state.text || !this.state.description}
                />
            </form>
        )
    }
}
