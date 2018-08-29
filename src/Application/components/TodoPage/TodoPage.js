import React, { Component } from 'react';
import './Todo.css';
import TodoItems from './TodoItems';

class TodoPage extends Component {
    constructor(props) {
		super(props);
		this.state = {
			items: [],
		}
        this.textInput = React.createRef();
      }
    
    addItem = (event) => {    
			event.preventDefault();
			if(this.textInput.current.value !== ""){ 
				let newItem = {							// creates a new object and sets its value to the current value in the input 
					text: this.textInput.current.value,
					key: Date.now()
				};
				this.setState((prevState) => { // using the prevState we do not mutate the state , we add to the itmes array with concat the new value
					return {
						items: prevState.items.concat(newItem)
					};
				});
			}
			this.textInput.current.value = "";
	  }
	  
	  deleteItem = (key) => {
		  let filteredItems = this.state.items.filter(item => { // creates a new variable which holds the list items filtered by their key.
			return (item.key !== key)
		  });

		  this.setState({ items: filteredItems}); // sets the state of items to the filteredItems
	  }
    
      render() {
        return (
          <div className="Form">
            <p>Todo list</p>
            <form onSubmit={this.addItem}>
				<input
					type="text"
					ref={this.textInput} 
				/>
				<button type="submit">Add a Todo</button>
            </form>
			<TodoItems 
				entries={this.state.items}
				delete={this.deleteItem}
			/>
          </div>
        );
      }
}

export default TodoPage;