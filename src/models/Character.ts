import { Schema, model, Document } from "mongoose";
export interface ICharacter extends Document{
    name: string;
    alias: string;
    power: string;
    age: number;
    category: "hero" | "villain"
}

const CharacterSchema = new Schema({
    name: {type: String, required: true},
    alias: {type: String, required: true},
    power: {type: String, required: true},
    age: {type: Number, required: true},
    category: {type: String, enum: ["hero", "villain"], required: true}
})

export default model("Character", CharacterSchema);