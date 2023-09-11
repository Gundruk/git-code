const express = require('express');
const errorhandler = require('./middleware/errorhandler');
const connectDb = require('./config/dbconnection');
const dotenv = require("dotenv").config();



connectDb();
const app = express(); //what exactly is instance?

app.use(express.json());
app.use("/api/contacts", require("./routes/contactroutes"));
app.use(errorhandler);
const port = 5000; /// process.env.PORT || port number(port mah run vayena !)
app.listen(port, () => {

    console.log('server is running in 3k ');
});