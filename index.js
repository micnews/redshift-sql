'use strict';

var assert = require('assert');
var pg = require('pg');

module.exports = function init (config) {
  assert(config.user, 'user required');
  assert(config.password, 'password required');
  assert(config.host, 'host required');
  assert(config.db, 'db required');

  var conString = 'postgres://' + config.user + ':' + config.password + '@' + config.host +
  ':' + (config.port || 5439) + '/' + config.db;
  var client = new pg.Client(conString);

  function query (sql, cb) {
    client.connect(function (err) {
      if (err) {
        return cb(err);
      }
      client.query(sql, function (err, result) {
        client.end();
        cb(err, result);
      });
    });
  }
  return query;
};
