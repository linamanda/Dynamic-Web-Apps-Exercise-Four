// Initiate express
const express = require("express");
const app = express();

// Setting port - dynamically with heroku
const port = process.env.PORT || 4000;

// Import Firebase
const firebase = require("firebase/app");

// Get configuration object so we can communicate with Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCt1fWN08W3OTDGOGkjLlNTjHHckCrXa9M",
  authDomain: "exercise-four-3b037.firebaseapp.com",
  projectId: "exercise-four-3b037",
  storageBucket: "exercise-four-3b037.appspot.com",
  messagingSenderId: "775483658353",
  appId: "1:775483658353:web:21eee8e642f79146074bd0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Routes for directing user to correct place
const indexRoute = require("./routes/index.js");
const articleRoute = require("./routes/article.js");
const createArticleRoute = require("./routes/createArticle.js");

// Tell exoress to use routes
app.use("/", indexRoute);
app.use("/article", articleRoute);
app.use("/create", createArticleRoute);

// Listen for requests on the port - if a user vists then send a result
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
