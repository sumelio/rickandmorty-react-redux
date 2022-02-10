import { handleActions } from 'redux-actions';
import { FETCH_CHARACTERS, FETCH_CHARACTERS_NUMBER, LOADING } from '../../constants/index';

export const characters = handleActions({
    [FETCH_CHARACTERS]       : (state, action) => action.payload,
}, [])

export const charactersNumber = handleActions({
    [FETCH_CHARACTERS_NUMBER]       : (state, action) => action.payload,
}, [])

export const isLoading = handleActions ( {
    [LOADING]           : (state, action) => action.payload,
}, false );
