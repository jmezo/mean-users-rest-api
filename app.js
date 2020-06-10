const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');

app = express();
app.use(bodyParser.json());

app.use(() => {
  console.log('connected');
});

app.use('/auth', authRoutes);

mongoose.connect('mongodb://localhost:27017/mean-users', {useNewUrlParser: true, useUnifiedTopology: true})
.then((_) => {
  app.listen(8080);
})
.catch((error) => {
  console.log(error);
});
