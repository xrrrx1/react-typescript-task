import * as React from 'react';
import Header from './Header';
import TodoListsContainer from './TodoListsContainer';
import '../styles/app-styles.css';
import Counter from './Counter';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <TodoListsContainer />
        <Counter />
      </div>
    );
  }
}

export default App;
