// require mongoose
const mongoose = require('mongoose');
// shorten mongoose.Schema to a var
const Schema = mongoose.Schema
// require passport-local-mongoose for authentication
const passportLocalMongoose = require('passport-local-mongoose');
// create a schema
const DoctorSchema = new Schema({
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

});
DoctorSchema.plugin(passportLocalMongoose);
// compile the model
const Doctor = mongoose.model('Doctor', DoctorSchema);
// export the model
module.exports = Doctor;