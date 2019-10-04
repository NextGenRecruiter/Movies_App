const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

//Route includes
const moviesRouter = require('./routes/router')

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for react requests
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/api/movies', moviesRouter)

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});