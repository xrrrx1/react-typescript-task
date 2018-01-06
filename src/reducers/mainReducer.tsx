import * as Redux from 'redux';
import tasks from './tasksReducer';
import popup from './popupReducer';

export default Redux.combineReducers ({
  popup,
  tasks
});