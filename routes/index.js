const express = require("express");
// Middleware to allow for routing on the node server
const router = express.Router();

// Require Firebase
const firebase = require("firebase/firestore/lite");

// Initialize Firestore Database
const db = firebase.getFirestore();
// Reference to the blogposts collection
const blogposts = db.collection("blogposts"); // fix

// Get all articles from firebase
router.get("/", (req, res) => {
  // Create empty array
  const blogpostsArray = [];
  // Get blogposts JSON from Firebase...

  // Push document from blogposts into the blogposts array...
  res.send(blogpostsArray);
});

module.exports = router;
