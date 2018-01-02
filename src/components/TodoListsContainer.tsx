import * as React from 'react';
import '../styles/todolistscontainer-styles.css';
import TodoList from './TodoList';

class TodoListsContainer extends React.Component {

    render() {
        return (
            <div className="todolists-container">
            <TodoList />
            <TodoList />
            <TodoList />
            <TodoList />
            </div>
        );
    }
}

export default TodoListsContainer;