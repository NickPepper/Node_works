'use strict';

let express     = require('express'),
    app         = express(),
    port        = process.env.PORT || 3333,
    mongoose    = require('mongoose'),
    Task        = require('./api/models/todoListModel'),
    bodyParser  = require('body-parser'),
    routes      = require('./api/routes/todoListRoutes');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', {useMongoClient: true}); 

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

// incorrect URLs handler
app.use((req, res) => {
    res.status(404).send({url: `${req.originalUrl} not found (404)`});
});

app.listen(port);

console.log(`todo list RESTful API server started on port ${port}`);

// $ mongod --dbpath /Users/nikolaipershin/Mongo/data/db
// $ npm run start