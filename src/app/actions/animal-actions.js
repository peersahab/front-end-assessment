export const STORE_ANIMALS = 'animals: storeAnimalsList';
export const SELECT_ANIMAL = 'animals: selectAnimal';
 export const REMOVE_ANIMAL = 'animals: removeAnimal';

export function storeList(list){

    return{
        type: STORE_ANIMALS,
        payload:{
           animalsList:  list
        }
    }
}

export function selectAnimal(selectedAnimal){
    return{
        type: SELECT_ANIMAL,
        payload:{
            selectedAnimal: selectedAnimal
        }
    }
}

export function removeAnimal(selectedAnimal){
    return{
        type: REMOVE_ANIMAL,
        payload:{
            animalToRemove: selectedAnimal
        }
    }
}