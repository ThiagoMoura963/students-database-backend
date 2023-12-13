import express from "express";
import handleConnectDataBase from "./config/dbConnect.js";

const app = express();
const connection = await handleConnectDataBase();

connection.on("error", (erro) => {
    console.log("Houve um erro de conexão", erro);
});

connection.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
});

app.use(express.json());

export default app;