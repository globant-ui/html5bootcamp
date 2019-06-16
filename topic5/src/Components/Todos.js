import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    let todoItems;
    if(this.props.todos){
      todoItems = this.props.todos.map(todo => {
        //console.log(project);
        return (
          <TodoItem key={todo.title} todo={todo} />
        );
      });
    }
    return (
      <div className="Todos">
        
        {todoItems}
      </div>
    )
  }
}

Todos.propTypes = {
 // todos: React.PropTypes.array
}

export default Todos;
