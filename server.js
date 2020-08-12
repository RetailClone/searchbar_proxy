const express = require('express');
const axios = require('axios');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));


app.listen(8000, () => {
    console.log('successfully connected to port 8000')
})