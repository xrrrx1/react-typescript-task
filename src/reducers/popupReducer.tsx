import { OPEN_POPUP, CLOSE_POPUP } from '../constants';

interface Action {
  type: string;
  payload: any;
}

const popupDefaultState = {
  isShow: false,
  title: null,
  content: null
};

export default function popup (state: {} = popupDefaultState, action: Action) {
  switch (action.type) {
    case OPEN_POPUP:
      return {
        isShow: true,
        title: action.payload.title,
        content: action.payload.content
      };
    case CLOSE_POPUP:
      return {
        isShow: false,
        title: null,
        content: null
      };
    default:
      return state;
  }
}