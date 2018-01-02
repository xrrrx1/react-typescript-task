import * as React from 'react';
import '../styles/header-styles.css';
import Button from './Button';

class Header extends React.Component {

    render() {
        return (
            <div className="header">
            <Button title={'Add task'} classForButton={'add-task'} />
            <h1 className="task-manager">Task Manager</h1>
            <Button title={'Logout'} classForButton={'loglog-out'} />
            </div>
            
        );
    }
}

export default Header;
