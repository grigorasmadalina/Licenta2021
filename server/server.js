const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

let port = 8081;
app.get("/", (req, res) => res.send({ message: "Server is running" }));

app.listen(port, () => {
  console.log('Server is running on' + port);
});