import React, { Component } from 'react';
import TodoListItem from './TodoListItem'

class TodoList extends Component {
    render() {
        let todoItems = [];
        this.props.todoList.forEach((item) => {
            todoItems.push(<TodoListItem key={item.id} name={item.name}></TodoListItem>);
        });
        return (
            <ul>
                {todoItems}
            </ul>
        );
    }
}

export default TodoList;