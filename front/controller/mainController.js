'use strict';

var mainController = {

    index: function(req, res) {
        res.render('index')
    },

    buttons: function(req, res) {
        res.render('buttons')
    }

}

module.exports = mainController;
