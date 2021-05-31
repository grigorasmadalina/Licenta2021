const express = require('express');
const { route } = require('./routes');
const app = express();
const routes = require('./routes');
const mongoose = require ('mongoose');
//Socket.io has to use the http server
const server = require('http').Server(app);
require('dotenv').config();


const port=8000;

//Socket.io
const io = require('socket.io')(server);
io.on("connection", (socket) => {
  console.log("🔌 New user connected! 🔌");
})

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.on("error", (err) => {
  console.log("Mongoose Connection ERROR:" + err.message);
});

mongoose.connection.once("open", () => {
    console.log("MongoDB connected!")
})


app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use('/api', routes)

//setup error handlers
const errorHandlers = require('./handlers/errorHandler');
app.use(errorHandlers.notFound);
app.use(errorHandlers.mongooseErrors);
if (process.env.ENV === "DEVELOPMENT"){
  app.use(errorHandlers.developmentErrors);
} else{
  app.use(errorHandlers.productionErrors);
}

app.listen(port, () => console.log('Server is running on' + port));


