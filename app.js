const express = require('express');
const app = express();
const port = 80; 

app.get('/sayHello', (req, res) => {
  res.json({ message: 'Hello User 2024-07-22 23:14:00 ' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

///home/azureuser/simple-api/app.js
