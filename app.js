const express = require('express');
const mongoose = require('mongoose');

app = express();

app.use(() => {
  console.log('connected');
});

mongoose.connect('mongodb://localhost:27017/mean-users', {useNewUrlParser: true, useUnifiedTopology: true})
.then((_) => {
  app.listen(8080);
})
.catch((error) => {
  console.log(error);
});
