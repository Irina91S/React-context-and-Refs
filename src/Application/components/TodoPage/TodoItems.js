import React, { Component } from 'react';
import "./Todo.css";

class TodoItems extends Component {
    createTask = (item) => {
        return <li onClick={() => this.delete(item.key)}
                    key={item.key}
                >
                    {item.text}
                </li>
    }

    delete = (key) => {
        this.props.delete(key);
    }

    render(){
        let todoEntries = this.props.entries; // getting a copy of props;
        let listItems = todoEntries.map(this.createTask); // takes every item in the props array and uses the map function to iterate over everyitem and create an list element where each list item's value is the item's text and key 

        return (
            <ul className="todo-list">
                {listItems}
            </ul>
        );
    }
}
export default TodoItems;