const express = require("express");
const app = express();

const port = process.env.PRT || 4000;

const indexRoute = require("./routes/index.js");

app.use("/", indexRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
