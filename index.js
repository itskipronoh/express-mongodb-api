var express = require("express");
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");
var Mongoose = require("mongoose");
var multer = require("multer");
const ConnectDB = require("./connetDB");

var app = express();
app.use(cors());

var CONNECTION_STRING = 'mongodb+srv://username:password@clusterproject1.np3adf7.mongodb.net/PROJECT1?retryWrites=true&w=majority';
var DATABASE_NAME = "todoappdb";
var database;

const start = async () => {
  try {
    database = await ConnectDB(CONNECTION_STRING, DATABASE_NAME);

    if (!database) {
      console.error('Error connecting to the database. Database object is undefined.');
      return;
    }

    app.listen(5100, () => {
      console.log('App started');
    });

  } catch (error) {
    console.error('Error starting the app:', error);
  }
};

app.get('/api/todoapp/Getnotes', async (request, response) => {
  try {
    // Access the collection directly through the db object
    const db = database.db(DATABASE_NAME);
    const result = await db.collection("todoappcollection").find({}).toArray();
    response.send(result);
  } catch (error) {
    console.error('Error fetching data:', error);
    response.status(500).send('Internal Server Error');
  }
});

start();



// var express = require("express");
// var MongoClient = require("mongodb").MongoClient; // Corrected capitalization
// var cors = require("cors"); // Corrected capitalization
// var Mongoose = require("mongoose");
// var multer = require("multer"); // Corrected capitalization
// const ConnectDB = require("./connetDB");

// var app = express();
// app.use(cors());


// var CONNECTION_STRING = 'mongodb+srv://user:user1234@clusterproject1.np3adf7.mongodb.net/PROJECT1?retryWrites=true&w=majority';

// var DATABASE_NAME = "todoappdb"; // Corrected variable name
// var database;



// const start = async () =>{
// try{
//   database = await ConnectDB(CONNECTION_STRING, DATABASE_NAME);
//     app.listen(5100, () => { 
//         console.log('app started')
//       });
// } catch(error){
//     console.log(error)
// }
// }


// app.get('/api/todoapp/Getnotes', async (request, response) => {
//   try {
//     const result = await database.collection("todoappcollection").find({}).toArray();
//     response.send(result);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     response.status(500).send('Internal Server Error');
//   }
// });


// start();




