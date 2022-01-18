import React, { Component } from 'react'

class SearchBar extends Component {

    state = { term: '' }

    // We use arrow functions that automatically bind the value of this for all code inside the function
    // so we don't have any context issue and "type undefined" errors (here, this = instance of SearchBar)
    handleInputChange = (event) => {
        this.setState({ term: event.target.value })
    }

    // To pass down the value typed by the user, we use this call-back which is passed from the parent (App)
    // to its child (ImageList). Then the child will call that call-back.
    handleFormSubmit = (event) => {
        event.preventDefault()
        // in a class component, we refer to props using "this.props"
        // (unlike in functional components where we can just use "props.")
        this.props.onSearchSubmit(this.state.term)
    }

    render() {
        return (
            <div className='ui segment'>
                <form
                    className='ui form'
                    onSubmit={this.handleFormSubmit}
                    // another way to solve a context issue
                    // onSubmit={ event => this.handleFormSubmit(event) }
                >
                    <div className='field'>
                        <label>Image Search</label>
                        <input
                            type='text'
                            value={this.state.term}
                            onChange={this.handleInputChange}
                            // another way to do it, without a dedicated external function
                            // onChange={ e => { this.setState({ term: e.target.value }) }}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
