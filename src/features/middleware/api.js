/* eslint-disable indent */
/* eslint-disable object-curly-newline */
import axios from 'axios';
import * as actions from '../apicalls';

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { url, method, data, onSucess, onError, onStart } = action.payload;
    if (onStart) {
      dispatch({ type: onStart });
    }
    next(action);
    try {
      const request = {
        url,
        baseURL: 'http://localhost:3000/api',
        method,
        data,
      };
      const res = await axios(request);

      dispatch(actions.apiCallSucess(res.data));
      if (onSucess) {
        dispatch({ type: onSucess, payload: res.data });
      }
    } catch (error) {
      dispatch(actions.apiCallFailed(error.message));
      if (onError) {
        dispatch({ type: onError, payload: error.message });
      }
    }
  };

export default api;
