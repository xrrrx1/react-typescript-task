import * as React from 'react';
import './item-styles.css';

interface ItemProps {
    task: {
        id: number,
        type: string,
        title: string,
        description: string,
        state: string
    };
}

class Item extends React.Component<ItemProps> {

    render() {
      const { task } = this.props;
      return (
          <div className={'todo-item ' + (task.type === 'bug' ? 'bug' : '')}>
            <p>{task.title}</p>
            <p>{task.description}</p>
          </div>
      );
    }
}

export default Item;