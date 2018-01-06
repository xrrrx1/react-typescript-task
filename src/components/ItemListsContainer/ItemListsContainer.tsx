import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './itemlistscontainer-styles.css';
import ItemList from './ItemList/ItemList';
import { popupActions, tasksActions } from '../../AC/actionCreators';

interface ItemListsContainerProps {
    tasks: any[];
    popupActions: {
        openPopup: any,
        closePopup: any
    };
    tasksActions: {
        newTask: any
    };
}
interface ItemListsContainerState {
    todoTasks: any[];
    inprogressTasks: any[];
    reviewTasks: any[];
    doneTasks: any[];
}

class ItemListsContainer extends React.Component<ItemListsContainerProps, ItemListsContainerState> {
  constructor(props: ItemListsContainerProps) {
    super(props);
    this.props = props;
    this.state = {
      todoTasks: [],
      inprogressTasks: [],
      reviewTasks: [],
      doneTasks: []
    };
  }

  componentDidMount() {
    this.prepareTasks(this.props.tasks);
  }

  componentWillReceiveProps(nextProps: ItemListsContainerProps) {
    this.prepareTasks(nextProps.tasks);
  }

  prepareTasks(tasks: any[]) {
    let tasksLists: ItemListsContainerState = {
      todoTasks: [],
      inprogressTasks: [],
      reviewTasks: [],
      doneTasks: []
    };
    tasks.map((task: any) => {
      switch (task.state) {
        case 'todo':
          tasksLists.todoTasks.push(task);
          break;
        case 'inprogress':
          tasksLists.inprogressTasks.push(task);
          break;
        case 'review':
          tasksLists.reviewTasks.push(task);
          break;
        case 'done':
          tasksLists.doneTasks.push(task);
          break;
      }
    });

    this.setState(tasksLists);
  }

  render() {
      return (
          <div className="todolists-container">
            <ItemList tasks={this.state.todoTasks} title={'Todo'} number={1} />
            <ItemList tasks={this.state.inprogressTasks} title={'In Progress'} number={2} />
            <ItemList tasks={this.state.reviewTasks} title={'Review'} number={3} />
            <ItemList tasks={this.state.doneTasks} title={'Done'} number={4} />
          </div>
      );
  }
}

export default connect<{}, {}, any>(
  (state: any) => ({tasks: state.tasks}),
  (dispatch: any) => ({
      popupActions: bindActionCreators<any>(popupActions, dispatch), 
      tasksActions: bindActionCreators<any>(tasksActions, dispatch)})
)(ItemListsContainer);