const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyAZS6V9PUXdM9y58Db4tbczkBLi-449UH8",
    authDomain: "todo-ninja-c5d18.firebaseapp.com",
    projectId: "todo-ninja-c5d18"
  });
  
var db = firebase.firestore();

var projects =[
  {
    "title": "Design a new website",
    "person": "The Net Ninja",
    "due": "1st Jan 2019",
    "status": "ongoing",
    "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
  },
  {
    "title": "Code up the homepage",
    "person": "Chun Li",
    "due": "10th Jan 2019",
    "status": "complete",
    "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
  },
  {
    "title": "Design video thumbnails",
    "person": "Ryu",
    "due": "20th Dec 2018",
    "status": "complete",
    "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
  },
  {
    "title": "Create a community forum",
    "person": "Gouken",
    "due": "20th Oct 2018",
    "status": "overdue",
    "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
  }
]

projects.forEach(function(obj) {
    db.collection("projects").add({
        title: obj.title,
		person: obj.person,
        content: obj.content,
        status: obj.status,
        due: obj.due
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});