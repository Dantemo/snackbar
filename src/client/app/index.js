'use strict';

module.exports =
  angular.module('snackbar', [
    'ui.bootstrap',
    'ui.router',
    //load extra external dependencies here, e.g.:
    //'ngAnimate',
    //html templates in $templateCache generated by Gulp:
    require('../../../tmp/templates').name,
    //useful directives, filters, services shared across the app
    require('../common').name,
    //example app module:
    require('./foo').name,
    //load extra app modules here, e.g.:
    //require('./frontend').name,
    //require('./admin').name
  ]);
