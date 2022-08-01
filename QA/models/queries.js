const pool = require('../db');

exports.getQuestion = (req, res) => {
  const product_id = Number(req.query.product_id);
  const page = Number(req.query.page) || 1;
  const count = Number(req.query.count) || 5;
  const queryStr = `SELECT json_build_object(
    'product_id', 1,
    'results', (SELECT json_agg(results) FROM (SELECT (q.question_id, q.question_body, q.question_date, q.asker_name, q.question_helpfulness, q.question_reported)
                             FROM questions q
                       WHERE product_id = 1) AS results))`;
  pool.query(queryStr)
    .then((data) => res.status(200).send(data))
    .catch((err) => setImmediate(() => { throw err; }));
};
