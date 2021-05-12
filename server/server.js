const express = require('express');
const { route } = require('./routes');
const app = express();
const routes = require('./routes');
const mongoose = require ('mongoose');
require('dotenv').config()

const port=8000;

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once("open", () => {
    console.log("MongoDB connected!")
})


app.use(express.json())

app.use('/api', routes)



app.listen(port, () => console.log('Server is running on' + port));
