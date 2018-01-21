import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './itemlistscontainer-styles.css';
import ItemList from './ItemList/ItemList';
import { popupActions, tasksActions } from '../../AC/actionCreators';
import { getTaskByType } from "../../reducers/tasksReducer";

interface ItemListsContainerProps {
    todoTasks: any[];
    inprogressTasks: any[];
    reviewTasks: any[];
    doneTasks: any[];
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
  }

  componentDidMount() {
    // this.prepareTasks(this.props.tasks);
  }

  componentWillReceiveProps(nextProps: ItemListsContainerProps) {
    // this.prepareTasks(nextProps.tasks);
  }

  // prepareTasks(tasks: any[]) {
  //   let tasksLists: ItemListsContainerState = {
  //     todoTasks: [],
  //     inprogressTasks: [],
  //     reviewTasks: [],
  //     doneTasks: []
  //   };
  //   tasks.map((task: any) => {
  //     switch (task.state) {
  //       case 'todo':
  //         tasksLists.todoTasks.push(task);
  //         break;
  //       case 'inprogress':
  //         tasksLists.inprogressTasks.push(task);
  //         break;
  //       case 'review':
  //         tasksLists.reviewTasks.push(task);
  //         break;
  //       case 'done':
  //         tasksLists.doneTasks.push(task);
  //         break;
  //     }
  //   });

  //   this.setState(tasksLists);
  // }

  render() {
      return (
          <div className="todolists-container">
            <ItemList tasks={this.props.todoTasks} title={'Todo'} number={1} />
            <ItemList tasks={this.props.inprogressTasks} title={'In Progress'} number={2} />
            <ItemList tasks={this.props.reviewTasks} title={'Review'} number={3} />
            <ItemList tasks={this.props.doneTasks} title={'Done'} number={4} />
          </div>
      );
  }
}

export default connect<{}, {}, any>(
  (state: any) => ({
    todoTasks: getTaskByType(state, 'todo'),
    inprogressTasks: getTaskByType(state, 'inprogress'),
    reviewTasks: getTaskByType(state, 'review'),
    doneTasks: getTaskByType(state, 'done')
  }),
  (dispatch: any) => ({
      popupActions: bindActionCreators<any>(popupActions, dispatch), 
      tasksActions: bindActionCreators<any>(tasksActions, dispatch)})
)(ItemListsContainer);