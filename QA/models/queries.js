const pool = require('../db');

exports.getQuestion = (req, res) => {
  const productId = Number(req.query.product_id);
  const page = Number(req.query.page) || 1;
  const count = Number(req.query.count) || 5;
  const queryStr = `SELECT array_to_json(
    array_agg(
      json_build_object(
        'question_id', q.question_id,
        'question_body', q.question_body,
        'question_date', q.question_date,
        'question_reported', q.question_reported,
        'question_helpful', q.question_helpfulness,
        'answers', (SELECT json_object_agg(
                         a.answer_id, json_build_object(
                        'body', a.answer_body,
                        'date', a.answer_date,
                        'answerer_name', a.answerer_name,
                        'reported', a.answer_reported,
                        'helpfulness', a.answer_helpfulness,
                        'photos', (SELECT
                                    array_to_json(
                                      array_agg(
                                        json_build_object(
                                          'id', p.photo_id,
                                          'url', p.url
                                        )
                                      )
                                    )
                                    FROM photos p
                                    WHERE a.answer_id = p.answer_id
                                  )
                        )
                      )
                      FROM answers a
                      WHERE q.question_id = a.question_id
                      AND a.answer_reported = false
                    )
      )
    )
  )
  FROM questions q
  WHERE q.product_id = ${productId}
  AND q.question_reported = false`;
  pool.query(queryStr)
    .then((data) => { res.status(200).send(data); })
    .catch((err) => setImmediate(() => { throw err; }));
};
