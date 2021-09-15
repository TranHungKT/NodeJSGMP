"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _readline = _interopRequireDefault(require("readline"));

var rl = _readline["default"].createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter something ', function (value) {
  console.log(value);
  console.log(value.split('').reverse().join(''));
  rl.close();
});