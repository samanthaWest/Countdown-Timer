const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // Added to get around the deprecation warning: "Mongoose: mpromise (mongoose's default promise library) is deprecated"

// Load the schemas
const eventSchema = require('./models/event.js');

module.exports = function(mongoDBConnectionString){

    let Event; // defined on connection to the new db instance
    let Employee; // defined on connection to the new db instance

    return {

        // Connection Method
        connect: function(){
            return new Promise(function(resolve,reject){
                let db = mongoose.createConnection(mongoDBConnectionString, { useNewUrlParser: true, useUnifiedTopology: true });
                
                db.on('error', (err)=>{
                    reject(err);
                });
        
                db.once('open', ()=>{
                    Event = db.model("events", eventSchema);
                    console.log("CONNECTS");
                    resolve();
                });
            });
        },

        // Get Events
        getAllEvents: function(){
            return new Promise(function(resolve,reject){
                Event.find()
                .exec()
                .then((event) => {
                    resolve(event);
                })
                .catch((err)=>{
                    reject(err);
                });
            })
        },
        addEmployee: function (eventData) {
            return new Promise(function (resolve, reject) {
                
                // Create a newEmployee from the employeeData
                var newEvent = new Event(eventData);

                newEvent.save((err,addedEvent) => {
                    if(err) {
                        reject(err);
                    } else {
                        resolve(addedEvent._id);
                    }
                });
            });
        }
    }
}