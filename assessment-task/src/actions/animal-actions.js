
export const STORE_ANIMALS = 'animals: storeAnimalsList';

export function storeList(list){
    return{
        type: STORE_ANIMALS,
        payload:{
           animalsList:  list
        }
    }
}
