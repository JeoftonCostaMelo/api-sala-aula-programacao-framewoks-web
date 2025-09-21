import  mongoose  from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/comicsdb";
export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB conectado com sucesso!");
    } catch (error) {
        console.error("Erro ao conectar no MongoDB:", error)
    }
}