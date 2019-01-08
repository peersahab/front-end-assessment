import { combineReducers } from 'redux';
import animalReducer from './animal-reducer';
const comReducer = combineReducers({
animalReducer: animalReducer
});

export default comReducer;