require('dotenv').config();
const compression = require('compression');
const express = require('express');
const path = require('path');
const cors = require('cors');
const pool = require('../db');

const app = express();

app.use(compression());
app.use(express.json());

app.listen(process.env.SERVER_PORT);
console.log(`Listening at http://localhost:${process.env.SERVER_PORT}`);
