'use strict';

exports.getCityName = require('./lib/getCityName');
exports.getCityNames = require('./lib/getCityNames');
exports.config = require('./lib/config');

exports.getCityNames(['London', 'New York'], 'en', 'fr').then(function(translation){
  console.log(translation);
});
