#!/usr/bin/env node

var fs = require('fs')
var path = require('path')

fs.readFile(path.resolve(__dirname, 'assets/quotes.txt'), function(err,data) {
  var quotes=data.toString().split('\n')
  var quote=quotes[Math.floor(Math.random() * quotes.length)]
  console.log(quote)
})
