import * as React from 'react';
import './itemlist-styles.css';
import Item from './Item/Item';

interface ItemListProps {
    title: string;
    number: any;
    tasks: any[];
}

class ItemList extends React.Component<ItemListProps> {

    render() {
        const {title, number} = this.props;
        const tasksItems = this.props.tasks.map((task, index) => <Item task={task} key={task.id} />);
        return (
            <div className="todo-list">
              <div className="todo-list-header"><h3>{number}. {title}</h3></div>
              <div className="todo-items-container">
              {tasksItems}
              </div>
            </div>
        );
    }
}

export default ItemList;