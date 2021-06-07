'use strict'
var net = require('net')
var debug = require('debug')('mqttjs:tcp')

/*
  variables port and host can be removed since
  you have all required information in opts object
*/
function streamBuilder (client, opts) {
  var port, host, lookup
  opts.port = opts.port || 1883
  opts.hostname = opts.hostname || opts.host || 'localhost'

  port = opts.port
  host = opts.hostname
  lookup = opts.lookup

  debug('port %d and host %s', port, host)
  return net.createConnection({ port: port, host: host, lookup: lookup })
}

module.exports = streamBuilder
