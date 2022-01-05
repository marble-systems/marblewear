const express = require('express');
const cors = require('cors');
const axios = require('axios');
const port = 3070;

const app = express();

app.use(express.static(__dirname + '/../client/dist/'))
app.use(cors());












app.listen(port, () => {console.log(`listening on ${port}`)})