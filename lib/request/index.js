'use strict';

var https = require('https');
var buildRequestOptions = require('./buildRequestOptions');

module.exports = function freebaseRequest(options) {
  options = buildRequestOptions(options);

  return new Promise(function resolver(resolve, reject){
    console.log('GET:', 'https://' + options.hostname + options.path);

    var startTime = Date.now();

    https.get(options, function onResponse(response) {
      response.setEncoding('utf8');

      var responseText = '';

      response.on('data', function onData(chunk) {
        responseText += chunk;
      });

      response.on('end', function onResponseEnd() {
        console.log(
          response.statusCode + ':',
          'https://' + options.hostname + options.path,
          (Date.now() - startTime) + 'ms'
        );

        if (response.statusCode === 200) {
          resolve(responseText);
        } else {
          reject(response);
        }
      });
    }).on('error', function onError(e) {
      console.log(e);
      reject(e);
    });
  });
};
