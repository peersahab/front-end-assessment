import { STORE_ANIMALS, SELECT_ANIMAL, REMOVE_ANIMAL} from "../actions/animal-actions";
const initialState = {
    allAnimals: [],
    selectedAnimals:[]
}
export function animalReducer(state = initialState, {type, payload}){
    switch (type){
        case STORE_ANIMALS:
            return {
                ...state,
                allAnimals:[...payload.animalsList]
            }
        
        case SELECT_ANIMAL:
            return {
                ...state,
                selectedAnimals:[...state.selectedAnimals, payload.selectedAnimal]
            }
        case REMOVE_ANIMAL:           
            return {
                ...state,
                selectedAnimals: Object.assign([], state.selectedAnimals).filter(animal => animal!== payload.animalToRemove)
            }
        default:
        return state;
    }
}
