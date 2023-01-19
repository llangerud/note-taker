const fs = require('fs');
const util = require('util');


const readingFile = util.promisify(fs.readFile);

const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

const readAndAddNote = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        parsedData.push(content);
        writeToFile(file, parsedData);
      }
    });
  };

  const readAndDeleteNote = (noteToDelete, file) => {
    fs.readFile(file, 'utf8', (err,data)=>{
      if (err) {
        console.error(err);
      } else {
        const parseData = JSON.parse(data);
        const noteDeletedArray = parseData.filter(note => note.id != noteToDelete)
        console.log(noteToDelete);
        console.log(noteDeletedArray);
        writeToFile(file, noteDeletedArray);
      }
      }
    )}
  


module.exports = {readingFile, readAndAddNote, writeToFile, readAndDeleteNote}