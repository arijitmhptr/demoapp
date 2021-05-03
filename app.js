const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Node');
})

app.listen(3000, () => console.log('Server running on Port:3000'));

module.exports = app