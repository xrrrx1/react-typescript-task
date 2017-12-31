import * as React from 'react';
import './todoitem-styles.css';

class TodoItem extends React.Component {

    render() {
        return (
            <div className="todo-item">
              <p>Do something</p>
            </div>
        );
    }
}

export default TodoItem;