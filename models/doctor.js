// require mongoose
const mongoose = require('mongoose');
// create a schema
const doctorSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
})
// compile the model
const Doctor = mongoose.model('Doctor', doctorSchema);
// export the model
module.exports = Doctor;