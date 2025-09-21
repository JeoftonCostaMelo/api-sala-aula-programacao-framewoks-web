import Character, { ICharacter } from "../models/Character";

export const createCharacter = async(data: ICharacter) =>{
    const character = new Character(data);
    return character.save();
}
export const getCharacters = async() => {
    return Character.find();
}

export const getCharacterById = async(id: string) => {
    return Character.findById(id);
}

export const updateCharacter = async(id:string, data: Partial<ICharacter>) => {
    return Character.findByIdAndUpdate(id, data);
}

export const deleteCharacter = async(id:string) => {
    return Character.findByIdAndDelete(id);
}