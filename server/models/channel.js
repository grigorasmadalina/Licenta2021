const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name is required!",
    },
    admin: {
        type: String,
    }
});

module.exports = mongoose.model("Channel", channelSchema);