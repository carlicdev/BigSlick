const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');


const { mongoose } = require('./database');

const app = express();

const contactRouter = require('./routes/contact.routes');

// Settings
const port = process.env.PORT || 5000;


// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());

// Routes 
app.use('/api/contact', contactRouter)

// Static files
//app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log(`Listening on port ${port}`));
