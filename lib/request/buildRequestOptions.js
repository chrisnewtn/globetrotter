'use strict';

var querystring = require('querystring');
var config = require('../config').get();

module.exports = function getRequestOptions(options) {
  var queryObject = {
    titles: options.city,
    action: 'wbgetentities',
    sites: 'enwiki',
    languages: [options.sourceLang, options.targetLang].join('|'),
    props: 'labels',
    format: 'json'
  };

  if (config.wikidataApiKey) {
    queryObject.key = config.wikidataApiKey;
  }

  return {
    hostname: config.wikidataHostname,
    path: config.wikidataRootSearchPath + querystring.stringify(queryObject)
  };
};
