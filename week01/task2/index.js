const csvParser = require('csv-parser');
const fs = require('fs');
const csv = require('csvtojson');

csvFilePath = __dirname + '/data.csv';

csv()
  .fromFile(csvFilePath)
  .then(jsonObj => {
    writeFile(jsonObj);
  });

fs.createReadStream(csvFilePath)
  .pipe(csvParser())
  .on('data', row => {
    console.log(row);
  })
  .on('error', error => console.log('Read file error', error))
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

function writeFile(values) {
  fs.writeFile(__dirname + '/data.txt', JSON.stringify(values), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('The file was saved!');
  });
}
