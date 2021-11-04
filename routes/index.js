const express = require("express");
// Middleware to allow for routing on the node server
const router = express.Router();

// Require Firebase
const firestore = require("firebase/firestore");

// Initialize Firestore Database
const db = firestore.getFirestore();

// Get all articles from firebase
router.get("/", (req, res) => {
  // Reference to the blogposts documents
  const blogposts = firestore.getDocs(firestore.collection(db, "blogposts"));

  // Create empty array
  const blogpostsArray = [];

  // Get blogposts JSON from Firebase...
  blogposts
    // After function runs...
    // Note: try/catch is async and there is no promise whereas then/catch promises to run AFTER rendering the result
    .then((response) => {
      response.forEach((doc) => {
        // Push document from blogposts into the blogposts array...
        blogpostsArray.push(doc.data());
      });
      return res.send(blogpostsArray);
    })
    // Handle errors
    .catch(function (error) {
      console.log("Error:", error);
      return res.send(error);
    });
});

module.exports = router;
