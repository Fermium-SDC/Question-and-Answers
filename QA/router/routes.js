const express = require('express');
const pg = require('pg');
const queries = require('../models/queries');

const router = express.Router();

router.get('/qa/questions', (req, res) => {
  queries.getQuestion(req, res);
});

module.exports = router;
