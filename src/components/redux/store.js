import { createStore } from 'redux';

const reducer = (state, action) => {
  switch (action.type) {
    case 'changeNumber':
      return { ...state, number: action.payload };
    case 'changeValue':
      return { ...state, value: action.payload };
    case 'addValue':
      return { ...state, value: [state.value, action.payload] };
    default:
      return state;
  }
};

export const store = createStore(reducer, { number: 0, value: 'obama' });
