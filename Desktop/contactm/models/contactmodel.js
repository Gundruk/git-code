const mongoose = require("mongoose");

const contactschema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "please add name"],
    },


    email: {
        type: String,
        required: [true, "please add email"],
    },

    phone: {
        type: String,
        required: [true, "please add number"],
    },

}, {

    timestamps: true,
});

module.exports = mongoose.model("contact", contactschema);