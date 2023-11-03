const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const DataModel = require('./models/table_data');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/userdata");

app.post('/signup', (req, res) => {
    DataModel.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err));
});

app.listen(3001, () => {
    console.log("Backend server running on port 3001");
});
