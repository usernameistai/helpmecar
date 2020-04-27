import { ADD_REG, REG_ERROR, GET_REG, REMOVE_REG, CLEAR_REG } from '../actions/types';

const initialState = {
  reg: [],
  loading: true,
  error: {}  
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case ADD_REG:
      return {
        ...state,
        reg: [payload, ...state.reg],
        loading: false
      };
    case GET_REG:
      return {
        ...state,
        reg: payload, //state.reg.filter(reg => reg._id === payload), //payload, //state.reg.filter(reg => reg._id === payload), 
        loading: false
      };
    case REG_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case REMOVE_REG:
      return {
        ...state,
        reg: state.reg.filter(reg => reg._id !== payload),
        loading: false
      };
    case CLEAR_REG:
      return {
        ...state,
        reg: null,
        regplate: '', 
        loading: false
      };
    default:
      return state;
  }
};
