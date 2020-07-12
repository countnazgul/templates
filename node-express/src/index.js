// const path = require('path');
// const fs = require('fs');
const express = require('express')
const app = express();
const bodyParser = require('body-parser');

const port = 3000

app.use(express.static('public'))
app.use('/jquery', express.static('../node_modules/jquery/dist/'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', (req, res) => res.sendFile('./public/index.html'))

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))