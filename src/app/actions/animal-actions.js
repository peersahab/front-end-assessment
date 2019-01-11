
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

export function selectAnimal(selectedAnimals){
    return{
        type: SELECT_ANIMAL,
        payload:{
            selectedAnimalsList: selectedAnimals
        }
    }
}

export function removeAnimal(selectedAnimal){
    return{
        type: REMOVE_ANIMAL,
        payload:{
            selectedAnimalToRemove: selectedAnimal
        }
    }
}
