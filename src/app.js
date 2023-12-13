import express from "express";
import handleConnectDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import handleError from "./middleware/handleError.js";
import handle404 from "./middleware/handle404.js";

const app = express();
const connection = await handleConnectDataBase();

connection.on("error", (erro) => {
  console.log("Houve um erro de conexão", erro);
});

connection.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
});

routes(app);
app.use(handle404);

app.use(handleError);

export default app;