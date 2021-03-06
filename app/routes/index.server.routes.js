var express = require('express');
// Load the application controllers
const indexController = require('../controllers/index.server.controller');
const trainController = require('../controllers/train_model.server.controller');

module.exports = function (app) {
    //handle a get request made to root path
    app.get('/', indexController.render); //go to http://localhost:3000/

    app.get('/logout', indexController.signout);

    app.route("/train")
        .get(trainController.trainModel);

};
