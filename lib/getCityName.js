'use strict';

var request = require('./request');

function parseResponseText(responseText, targetLang) {
  try {
    var responseJSON = JSON.parse(responseText);
    return responseJSON.entities[Object.keys(responseJSON.entities)[0]].labels[targetLang].value;
  } catch(error) {
    throw new Error('Error parsing Wikidata response.');
  }
}

module.exports = function getCityName(city, sourceLang, targetLang) {
  return request({
    city: city,
    targetLang: targetLang,
    sourceLang: sourceLang
  }).then(function (responseText) {
    return parseResponseText(responseText, targetLang);
  });
};
