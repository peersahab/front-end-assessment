import {createStore,compose} from 'redux';
import comReducer from '../reducers/index';
const initialState={animalsList: [], selectedAnimalsList: []};

export const store  = createStore(
    comReducer,
    initialState,
        compose(
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ));
