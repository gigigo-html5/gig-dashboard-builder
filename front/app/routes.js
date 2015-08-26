'use strict';

var mainController = requireLib('front/controller/mainController');

module.exports = function(app) {

    app.get('/', mainController.index);
    app.get('/basicui/buttons', mainController.buttons)



}
