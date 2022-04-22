const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "/dist/meu-site"));

app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/dist/meu-site/index.html");
});

app.listen(PORT, () => {
  console.log("Servidor inciiado na porta" + PORT);
});
