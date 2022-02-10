import { handleActions } from 'redux-actions';
import { FETCH_EPISODES } from '../../constants/index';

export const episodes = handleActions({
    [FETCH_EPISODES]       : (state, action) => action.payload,
}, [])