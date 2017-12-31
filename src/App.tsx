import * as React from 'react';
import Header from './Header';
import TodoListsContainer from './TodoListsContainer';
import './app-styles.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <TodoListsContainer />
      </div>
    );
  }
}

export default App;
