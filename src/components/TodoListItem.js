import React, { Component } from 'react';

class TodoListItem extends Component {
    render() {
        return (
            <li>{this.props.name}</li>
        );
    }
}

export default TodoListItem;