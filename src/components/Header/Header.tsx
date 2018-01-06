import * as React from 'react';
import './header-styles.css';
import Button from '../Button/Button';

interface HeaderProps {
    popupActions: {
        openPopup: any,
        closePopup: any
    };
    tasksActions: {
        newTask: any
    };
}

interface HeaderState {
    title: string;
    description: string;
    type: string;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.props = props;
    this.state = {
      title: '',
      description: '',
      type: 'task'
    };
  }

  onTitleChange = (e: any) => {
    this.setState({
        title: e.target.value
    });
  }

  onDescriptionChange = (e: any) => {
    this.setState({
        description: e.target.value
    });
  }

  onTypeChange = (e: any) => {
    this.setState({
        type: e.target.value
    });
  }

  onFormSubmitHandler = () => {
    this.props.tasksActions.newTask({
      title: this.state.title,
      description: this.state.description,
      type: this.state.type
    });
    this.props.popupActions.closePopup();
  }

  newTaskClickHandler = () => {
    const newTaskContent =
      <div className="new-task-form">
        <div className="form-group">
          <label>Task name</label>
          <input type="text" name="title" className="form-control" onChange={this.onTitleChange} defaultValue={this.state.title} />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea className="form-control" name="description" onChange={this.onDescriptionChange} defaultValue={this.state.description}/>
        </div>
        <div className="form-group">
          <label>Type</label>
          <select name="type" className="form-control" onChange={this.onTypeChange} defaultValue={this.state.type}>
            <option value="task">task</option>
            <option value="bug">bug</option>
          </select>
        </div>
        <div className="form-group">
          <button onClick={this.onFormSubmitHandler}>Save</button>
        </div>
      </div>;
    this.props.popupActions.openPopup(newTaskContent, 'New task');
  }

  logoutClickHandler = () => {

  }

  render() {
    return (
        <div className="header">
        <Button title={'Add task'} classForButton={'add-task'} clickHandler={this.newTaskClickHandler} />
        <h1 className="task-manager">Task Manager</h1>
        <Button title={'Logout'} classForButton={'log-out'} clickHandler={this.logoutClickHandler} />
        </div>
    );
  }
}

export default Header;