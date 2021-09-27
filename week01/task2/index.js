const fs = require('fs');
const csv = require('csvtojson');


csvFilePath = __dirname + '/data.csv';

csv()
  .fromFile(csvFilePath)
  .subscribe(
    (json) =>{
      console.log("each line",json)
      writeFile(json)},
  )

function writeFile(values) {
  fs.appendFile(__dirname + '/data.txt', JSON.stringify(values), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('The file was saved!');
  });
}
