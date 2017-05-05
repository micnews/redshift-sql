'use strict';

var ok = require('assert');
var pg = require('pg');

module.exports = function init (config) {
  ok(config.user, 'user required');
  ok(config.password, 'password required');
  ok(config.host, 'host required');
  ok(config.db, 'db required');

  var conString = 'postgres://' + config.user + ':' + config.password + '@' + config.host +
  ':' + (config.port || 5439) + '/' + config.db;

  function query (sql, values, cb) {
    var client = new pg.Client(conString);
    client.connect(function (err) {
      if (err) {
        return cb(err);
      }
      client.query(sql, values, function (err, result) {
        client.end();
        cb(err, result);
      });
    });
  }
  return query;
};
