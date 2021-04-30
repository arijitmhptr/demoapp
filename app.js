const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.send('Hello Node');
})

app.listen(3500, () => console.log('Server running on Port:3500'));

module.exports = app