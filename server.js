// app.js

const express = require('express');
const connectDB = require('./config/db');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

var cors = require('cors');

// routes
const books = require('./routes/api/books');
require("dotenv").config({path:"./config.env"});

//const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// use Routes
app.use('/api/books', books);

const port = process.env.PORT;

//require("./models/Book");

/* mongoose
  .connect(
    "mongodb+srv://krchome1:ddq6645k@cluster0.08all.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB has been connected"))
  .catch((err) => console.log(err)); */
  // Init Middleware
//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//import routes
require("./routes/api/books")(app);

// use Routes
app.use('/api/books', books);
//if(process.env.NODE_ENV === "production")
//{
    app.use(express.static(path.resolve(__dirname,'./MERN_A_to_Z_Client/build')));
    app.get("*", function (request, response) {
        response.sendFile(path.resolve(__dirname, "./MERN_A_to_Z_Client/build","index.html"));
      });
/* }else{
   app.get("/",(req, res)=>{
      res.send("API running");
   });  */
//}
const PORT = process.env.PORT || 5000;

// Accessing the path module
const path = require("path");

// Step 1:
//app.use(express.static(path.resolve(__dirname, "./MERN_A_to_Z_Client/build")));
// Step 2:


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

