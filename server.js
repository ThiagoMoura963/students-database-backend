import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;

app.get("/", (_, res) => {
    res.status(200).send("Servidor rodando");
})

app.listen(PORT, () => {
    console.log("Servidor rodando na porta 3000");
});