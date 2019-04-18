const express = require('express');
const path = require('path');

const routes = require('../routes/index');

module.exports = app => {

    // Settings
    app.set('port', process.env.PORT || 5000);

    // React static files
    app.use(express.static(path.join(__dirname, 'client/build')));

    // Middlewares
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    // Routes
    routes(app);

    return app;
}