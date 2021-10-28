const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

const indexRoute = require("./routes/index.js");
const articleRoute = require("./routes/article.js");
const createArticleRoute = require("./routes/createArticle.js");

app.use("/", indexRoute);
app.use("/article", articleRoute);
app.use("/create", createArticleRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
