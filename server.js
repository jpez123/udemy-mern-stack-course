//Libraries
const express = require('express');

//Express
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('API Running'));

//Listener
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
