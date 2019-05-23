const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
//import routes
const postsRoute = require('./routes/post');

app.use('/posts', postsRoute)

//middlewares
app.use(cors());
app.use('/posts', () => {
  console.log('this is a middleware running')
});

//routes
app.get('/', (req,res) => {
  res.send('We are on home')
})


//connect to database
mongoose.connect(process.env.DB_CONNECTION,
  {useNewUrlParser: true},
  () => {
  console.log('connected to db');
});


//server listen
app.listen(3000);