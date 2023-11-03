const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const DataModel = mongoose.model("data", DataSchema);
module.exports = DataModel;
