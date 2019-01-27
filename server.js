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
app.use('/api/contact', contactRouter);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  };

// Static files
//app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log(`Listening on port ${port}`));
