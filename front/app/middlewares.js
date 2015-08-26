var swig = require('swig');
var express = require('express');

module.exports = function(app) {

    app.engine('html', swig.renderFile);
    app.set('view engine', 'html');
    app.set('view cache', false);
    app.set('views', __basedir  + '/front/resources/views');
    swig.setDefaults({ cache: false });

    app.use(express.static(__basedir +'/front/resources/public'));

}
