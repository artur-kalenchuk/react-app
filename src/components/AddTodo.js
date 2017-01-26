import React, { Component } from 'react';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler() {
        if(!this.input.value) return false;
        this.props.onAddTodo(this.input.value);
        this.input.value = '';
    }

    render() {
        return (
            <div>
                <input type="text" ref={(node) => {this.input = node}} />
                <button onClick={this.onClickHandler}>Add item to list</button>
            </div>
        );
    }
}

export default AddTodo;