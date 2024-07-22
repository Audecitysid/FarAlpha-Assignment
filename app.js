const express = require('express');
const app = express();
const port = 80; 

app.get('/sayHello', (req, res) => {
  res.json({ message: 'Hello User' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

///home/azureuser/simple-api/app.js

//testing the server 2024-07-22 23:35:24
