
const express = require('express');
const router = express.Router();
router.use(express.static('public'));
const {readingFile, writeToFile, readAndAddNote} = require ('../helpers/fsUtil');
const { v4: uuidv4 }  = require('uuid')
router.use(express.json());
router.use(express.urlencoded());


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



// router.delete(`/api/notes/${id}`, (req,res) => {

// res.send('received delete request');
// });




module.exports = router;