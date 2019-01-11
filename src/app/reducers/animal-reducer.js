import { STORE_ANIMALS, SELECT_ANIMAL, REMOVE_ANIMAL } from "../actions/animal-actions";
export function animalReducer(state = [], {type, payload}){
    switch (type){
        case STORE_ANIMALS:
            return payload.animalsList;
        default:
        return state;
    }
}

export function selectedAnimalReducer(state = [], {type, payload}){
    switch (type){
        case SELECT_ANIMAL:
            return payload.selectedAnimalsList;
        case REMOVE_ANIMAL:
            console.log("Remove -> " + payload.selectedAnimalToRemove);
            var animalToRemove = payload.selectedAnimalToRemove;
            var index = state.indexOf(animalToRemove);
            state.splice(index, 1);
            return state;
        default:
        return state;
    }
}
