const express = require('express');

app = express();

app.use(() => {
  console.log('connected');
})

app.listen(8080);
