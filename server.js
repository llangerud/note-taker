const express = require('express');
const path = require('path');
const app = express();
const PORT =  process.env.PORT || 3001;
const {apiRouter} = require('./routes/routeIndex')
app.use(express.static('public'));

// localhost:3001/
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);
// localhost:3001/notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))

});


app.use('', apiRouter);

// localhost:3001/ any route not defined otherwise
app.get('*', (req, res) =>
res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

