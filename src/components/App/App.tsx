import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import ItemListsContainer from '../ItemListsContainer/ItemListsContainer';
import './app-styles.css';
import Popup from '../Popup/Popup';
import { popupActions, tasksActions } from '../../AC/actionCreators';

interface AppProps {
    popup: {
        isShow: boolean,
        title: string,
        content: any
    };
    popupActions: {
        openPopup: any,
        closePopup: any
    };
    tasksActions: {
        newTask: any
    };
}

class App extends React.Component<AppProps> {
  render() {
    const { popup, popupActions, tasksActions } = this.props;
    return (
      <div className="container">
        <Popup popup={popup} popupActions={popupActions} />
        <Header popupActions={popupActions} tasksActions={tasksActions} />
        <ItemListsContainer />
      </div>
    );
  }
}

export default connect<{}, {}, any>(
  (state: any) => ({popup: state.popup}),
  (dispatch: any) => ({popupActions: bindActionCreators<any>(popupActions, dispatch), tasksActions: bindActionCreators<any>(tasksActions, dispatch)})
)(App);