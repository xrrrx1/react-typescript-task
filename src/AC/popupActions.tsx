import { OPEN_POPUP, CLOSE_POPUP } from '../constants';

export const openPopup = (content: any, title: string) => ({
  type: OPEN_POPUP,
  payload: { content, title }
});
export const closePopup = () => ({
  type: CLOSE_POPUP
});