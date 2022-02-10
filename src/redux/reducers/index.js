import { combineReducers } from 'redux';
import { characters, charactersNumber, isLoading } from './character';
import { episodes } from './episode';
import { locations } from './location';

export default combineReducers({
    characters, charactersNumber, episodes, isLoading, locations
});
