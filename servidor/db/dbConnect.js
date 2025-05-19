import { MongoClient } from "mongodb";

const cliente = new MongoClient(
  "mongodb+srv://joaovm:joaovm@websocket.n0d7qyj.mongodb.net/?retryWrites=true&w=majority&appName=Websocket"
);

let documentosColecao, usuariosColecao;

try {
  await cliente.connect();

  const db = cliente.db("alura-websockets");
  documentosColecao = db.collection("documentos");
  usuariosColecao = db.collection("usuarios");

  console.log("Conectado ao banco de dados com sucesso!");
} catch (erro) {
  console.log(erro);
}

export { documentosColecao, usuariosColecao };
