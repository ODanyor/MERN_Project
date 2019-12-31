const express = require('express');
const mongoose = require('mongoose');
//const bodyParser = require('body-parser');

const app = express();

// Api objects
const items = require('./routes/api/items');
const posts = require('./routes/api/posts');
const users = require('./routes/api/users');

// Body Parser Middleware
app.use(express.json());

// Data Base Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo Data Base
mongoose
    .connect(db, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})
    .then(() => console.log("Server connected to MongoDB successfuly!"))
    .catch(err => console.log(err));

// Routes
app.use('/api/items', items);
app.use('/api/posts', posts);
app.use('/api/users', users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is listenning to ${port}`));
