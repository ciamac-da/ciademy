const mongoose = require("mongoose");

// const { mongouser, mongopass } = process.env;

exports.connectToDB = () => {
    return mongoose.connect("mongodb://localhost/ciademy", {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};
