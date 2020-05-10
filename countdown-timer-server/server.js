const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require('body-parser');
const app = express();

const HTTP_PORT = process.env.PORT || 8080;
const mongoDBConnectionString = '';

const dataService = require("./data-service.js");
const data = dataService(mongoDBConnectionString);

// Add support for incoming JSON entities
app.use(bodyParser.json());
// Add support for CORS
app.use(cors());

// Deliver the app's home page to browser clients
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});

// Get list of events
app.get("/getEvents", (req,res) => {
    data.getAllEvents().then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.status(500).end();
    })
});

// Add event to list
app.post("/addEvent", (req, res) => {
    data.addEvent(req.body).then((data)=>{
        res.json({"message": "Event " + data + " added successfully"});
    })
    .catch((err)=>{
        res.status(500).end();
    })
});

// Connect to db then run at PORT 8080
data.connect().then(()=>{
    app.listen(HTTP_PORT, ()=>{console.log("API listening on: " + HTTP_PORT)});
})
.catch((err)=>{
    console.log("unable to start the server: ", err.message);
    process.exit();
});