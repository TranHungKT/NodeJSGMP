"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _csvParser = _interopRequireDefault(require("csv-parser"));

var _fs = _interopRequireDefault(require("fs"));

var _csvtojson = _interopRequireDefault(require("csvtojson"));

var csvFilePath = __dirname + '/data.csv';
(0, _csvtojson["default"])().fromFile(csvFilePath).then(function (jsonObj) {
  writeFile(jsonObj);
});

_fs["default"].createReadStream(csvFilePath).pipe((0, _csvParser["default"])()).on('data', function (row) {
  console.log(row);
}).on('error', function (error) {
  return console.log('Read file error', error);
}).on('end', function () {
  console.log('CSV file successfully processed');
});

function writeFile(values) {
  _fs["default"].writeFile(__dirname + '/data.txt', JSON.stringify(values), function (err) {
    if (err) {
      return console.log(err);
    }

    console.log('The file was saved!');
  });
}