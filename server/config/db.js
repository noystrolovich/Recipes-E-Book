const mongoose = require('mongoose');

const connectDB = () => {
  mongoose
    .connect('mongodb://localhost:27017/recipesDB')
    .then(() => console.log('Connected to recipesDB'))
    .catch((error) => console.log(error));
};

module.exports = connectDB;