const express = require('express');
const queries = require('../models/queries');

const answerRouter = express.Router();

answerRouter.get('/qa', (req, res) => {
  queries.getQuestion(req, res);
});

module.exports = answerRouter;
