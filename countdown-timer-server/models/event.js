var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the eventSchema
var eventSchema = new Schema({
    _id: Object,
    eventName: String,
    eventDate: Date
});

// make this schema available to the Node application
module.exports = eventSchema;