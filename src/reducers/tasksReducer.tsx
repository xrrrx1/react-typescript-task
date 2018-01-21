import { ADD_NEW_TASK } from '../constants';
import defaultValues from '../defaultValues';

interface Action {
  type: string;
  payload: any;
}

interface Task {
  id: number;
  type: string;
  title: string;
  description: string;
  state: string;
}

const getNewTaskId = ( state: Task[] ) => {
  return 1 + state[0].id;
};

export const getTaskByType = (store, type) => {
  return store.tasks.filter(task => task.type === type);
};

export default function tasks (state: Task[] = defaultValues, action: Action) {
  switch (action.type) {
    case ADD_NEW_TASK:
    return [
      ...state.map(task => task),
      {
        id: getNewTaskId(state),
        title: action.payload.taskData.title,
        description: action.payload.taskData.description,
        type: action.payload.taskData.type,
        state: 'todo'
      }
    ];
    default:
      return state;
  }
}

