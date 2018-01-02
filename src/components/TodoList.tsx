import * as React from 'react';
import '../styles/todolist-styles.css';
import TodoItem from './TodoItem';

class TodoList extends React.Component {

    render() {
        return (
            <div className="todo-list">
              <div className="todo-list-header"><h3>№. Task for items</h3></div>
              <div className="todo-items-container">
              <TodoItem />
              <TodoItem />
              <TodoItem />
              <TodoItem />
              <TodoItem />
              <TodoItem />
              </div>
            </div>
        );
    }
}

export default TodoList;