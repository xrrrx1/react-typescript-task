import INCREMENT from '../constants';

export default (count = 0, action: any) => {
  const {type} = action;

  switch (type) {
      case INCREMENT: return count + 1;
  }

  return count;
};


export const getState = (state: any) => state.count;