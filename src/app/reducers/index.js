import { combineReducers } from 'redux';
import {animalReducer} from './animal-reducer';
const comReducer = combineReducers({
    animals: animalReducer
// animalsList: animalReducer,
// selectedAnimalsList: selectedAnimalReducer
});

export default comReducer;