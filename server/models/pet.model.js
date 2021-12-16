const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        required:[true, "Must enter an pet name!"],
        minLength:[3, "Pet name must be at least 3 characters!"],
        // unique:[true, "Pet name already exist!"],
    },

    petType: {
        type: String,
        required:[true, "Must enter an pet type!"],
        minLength:[3, "Pet type must be at least 3 characters!"],
    },

    petDescription: {
        type: String,
        required:[true, "Must enter an pet description!"],
        minLength:[3, "Pet description must be at least 3 characters!"],
    },

    skills: [],

    skillOne: {
        type: String,
        default: "N/A",
    },

    skillTwo: {
        type: String,
        default: "N/A",
    },

    skillThree: {
        type: String,
        default: "N/A",
    },

}, { timestamps: true });

module.exports = mongoose.model('Pet', PetSchema);