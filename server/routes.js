'use strict';

var path = require('path');

module.exports = function (app) {

    app.route('/').get(function (req, res) {
        res.sendFile(path.resolve('client/index.html'));
    });
};