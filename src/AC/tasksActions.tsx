import { ADD_NEW_TASK } from '../constants';

export const newTask = (taskData: any) => ({
  type: ADD_NEW_TASK,
  payload: { taskData }
});