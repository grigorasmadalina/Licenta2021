const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    channel: {
        type: String,
        ref: "Channel",
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    message:{
        type:String,
        required: "Message is required",
    },

    timestamp:{
        type:String
    }

});

module.exports = mongoose.model("Messagr", messageSchema);