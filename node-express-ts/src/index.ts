import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import * as bodyParser from 'body-parser';
import express from "express";
import axios, { AxiosRequestConfig } from 'axios'

const port = 3000;

const app = express();
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    // res.sendFile(path.join(__dirname, `./public/index.html`))
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});