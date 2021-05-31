const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min:6
    },
    email: {
        type: String,
        required: true,
        max:50
    },
    password: {
        type: String,
        required: true,
        min: 8
    },
    date: {
        type: Date,
        default: Date.now
    },
},
    {
        timestamps: true,
    }

);

module.exports = mongoose.model('User', userSchema);