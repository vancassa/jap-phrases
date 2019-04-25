const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

global.Vocab = require('./api/models/vocabModel');
const routes = require('./api/routes/vocabRoutes');

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(
  'mongodb://heroku_jpfkc4bg:4fk9su0fn9fpm1lgu3p84eeqtk@ds147436.mlab.com:47436/heroku_jpfkc4bg',
  { useNewUrlParser: true }
);

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//serve any static file
app.use(express.static(path.join(__dirname, 'client/dist')));

//Handle react routing, return all requests to React app
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

routes(app);
app.listen(port);

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Server started on port ${port}`);



