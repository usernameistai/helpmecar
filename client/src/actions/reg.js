import axios from 'axios';
import { setAlert } from './alert';
import { 
  ADD_REG, 
  REG_ERROR, 
  GET_REG, 
  REMOVE_REG
 } from './types'; // , CLEAR_REG

// added regId
export const addReg = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/reg', formData, config);
    // const res = await axios.post(`/api/reg/${regId}`, formData, config);

    dispatch({
      type: ADD_REG,
      payload: res.data
    });

    dispatch(setAlert('Registration logged', 'success'));
  } catch (err) {
    dispatch({
      type: REG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get Reg
export const getReg = regId => async dispatch => {
  try {
    // dispatch({ type: CLEAR_REG });

    const res = await axios.get(`/api/reg/reg-search/${regId}`); // was const res = await // got rid of Cast to ObjectId failed for value "undefined" at path "_id" for model "reg" adding /reg/reg/...

    dispatch({
      type: GET_REG,
      payload: res.data
    });
    console.log(res.data);
  } catch (err) {
    dispatch({
      type: REG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete Reg
export const deleteReg = id => async dispatch => {
  try {
    axios.delete(`/api/reg/${id}`);

    dispatch({
      type: REMOVE_REG,
      payload: id
    });

    dispatch(setAlert('Registration removed from db', 'Success'));
  } catch (err) {
    dispatch({
      type: REG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};