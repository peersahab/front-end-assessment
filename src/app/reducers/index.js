import { combineReducers } from 'redux';
import {animalReducer, selectedAnimalReducer} from './animal-reducer';
const comReducer = combineReducers({
animalsList: animalReducer,
selectedAnimalsList: selectedAnimalReducer
});

export default comReducer;