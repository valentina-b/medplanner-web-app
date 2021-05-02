// require mongoose
const mongoose = require('mongoose');
// shorten mongoose.Schema to a var
const Schema = mongoose.Schema
// create a schema
const doctorSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

})
// compile the model
const Doctor = mongoose.model('Doctor', doctorSchema);
// export the model
module.exports = Doctor;