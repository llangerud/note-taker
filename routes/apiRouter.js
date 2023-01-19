
const express = require('express');
const router = express.Router();
router.use(express.static('public'));
const {readingFile, writeToFile, readAndAddNote, readAndDeleteNote} = require ('../helpers/fsUtil');
const { v4: uuidv4 }  = require('uuid')
router.use(express.json());
router.use(express.urlencoded({extended: true}));


router.get('/api/notes', (req, res) => 
  readingFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
  );

router.post('/api/notes', (req,res) => {
  const {title, text} = req.body;
  const newNote = {
    title,
    text,
    id: uuidv4(),
  };
  readAndAddNote(newNote, './db/db.json');
  res.json();

});


// "localhost:3001/api/notes/sdf8yf"
router.delete(`/api/notes/:id`, (req,res) => {
readAndDeleteNote(req.params.id,'./db/db.json');
res.send('received delete request');
});




module.exports = router;

// browsers need these
const stringifiedObj = {
  "key1": "value1"
}

// javascript needs these
const parsedObj = {
  key1: "value1"
}