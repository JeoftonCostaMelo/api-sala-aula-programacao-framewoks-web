import express from "express";
import bodyParser from "body-parser";
import characterRoutes from "./routers/characterRouters";

const app = express();
app.use(bodyParser.json());
app.use("/api/characters", characterRoutes);
export default app;