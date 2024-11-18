const express = require('express');
const connectDB = require('./config/db')
const cors = require('cors');
const recipesController = require('./controllers/recipesController');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use('/recipes',recipesController);

app.listen(3000, () => {
    console.log('server is running');
});
