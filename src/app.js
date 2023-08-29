// Express server
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`)
});


// after running: heroku create -a jle-weather 
// https://jle-weather-831cf1366665.herokuapp.com/ | https://git.heroku.com/jle-weather.git