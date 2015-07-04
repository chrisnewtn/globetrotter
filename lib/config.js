'use strict';

var config = {
  defaultSourceLang: 'en',
  httpsKey: '',
  httpsCert: '',
  wikidataApiKey: '',
  wikidataHostname: 'www.wikidata.org',
  wikidataRootSearchPath: '/w/api.php?'
};

var configKeys = Object.keys(config);

exports.get = function getConfig(){
  return config;
};

exports.set = function setConfig(newConfig) {
  Object.keys(newConfig).forEach(function parseKey(key) {
    if (configKeys.indexOf(key) !== -1) {
      config[key] = newConfig[key];
    }
  });

  return config;
};
