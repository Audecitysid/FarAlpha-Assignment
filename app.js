const express = require('express');
const app = express();
const port = 5000; 

app.get('/', (req, res) => {
  res.send('<!DOCTYPE html><html lang="en"><head><title>Node Webserver</title></head><body><h1><center>Node Webserver Running</center></h1></body></html>');
});


app.get('/sayHello', (req, res) => {
  res.json({ message: 'Hello Users' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

///home/azureuser/simple-api/app.js

// testing


