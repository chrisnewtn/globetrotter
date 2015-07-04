'use strict';

var getCityName = require('./getCityName');

module.exports = function getCityNames(cities, targetLang, sourceLang){
  return Promise.all(cities.map(function getCity(city) {
    return getCityName(city, targetLang, sourceLang);
  }));
};
