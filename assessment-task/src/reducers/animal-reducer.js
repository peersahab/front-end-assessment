import { STORE_ANIMALS } from "../actions/animal-actions";
export default function animalReducer(state = '', {type, payload}){
    switch (type){
        case STORE_ANIMALS:
            return payload.animalsList;
        default:
        return state;
    }
}
