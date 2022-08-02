require('dotenv').config();
const compression = require('compression');
const express = require('express');
const cors = require('cors');
const pool = require('../db');
const answerRouter = require('../router/routes');

const app = express();

app.use(cors());
app.use(compression());
app.use(express.json());
app.use('/qa', answerRouter);

app.listen(process.env.SERVER_PORT);
console.log(`Listening at http://localhost:${process.env.SERVER_PORT}`);
