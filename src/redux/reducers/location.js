import { handleActions } from 'redux-actions';
import { FETCH_LOCATIONS } from '../../constants/index';

export const locations = handleActions({
    [FETCH_LOCATIONS]       : (state, action) => action.payload,
}, [])