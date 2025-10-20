const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("API Node rodando com CI/CD!");
});

app.listen(PORT, () => console.log(`Servidor na porta ${PORT}`));
