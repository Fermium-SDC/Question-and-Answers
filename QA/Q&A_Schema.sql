CREATE TABLE "Questions"(
    "question_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "question_body" VARCHAR(255) NOT NULL,
    "question_date" TEXT NOT NULL,
    "asker_name" VARCHAR(255) NOT NULL,
    "asker_email" VARCHAR(255) NOT NULL,
    "question_reported" BOOLEAN NOT NULL,
    "question_helpfulness" INTEGER NOT NULL
);
CREATE INDEX "questions_product_id_index" ON
    "Questions"("product_id");
ALTER TABLE
    "Questions" ADD SERIAL PRIMARY KEY("question_id");
CREATE TABLE "Answers"(
    "answer_id" INTEGER NOT NULL,
    "question_id" INTEGER NOT NULL,
    "answer_body" VARCHAR(255) NOT NULL,
    "answer_date" TEXT NOT NULL,
    "answerer_name" VARCHAR(255) NOT NULL,
    "answerer_email" VARCHAR(255) NOT NULL,
    "answer_reported" BOOLEAN NOT NULL,
    "answer_helpfulness" INTEGER NOT NULL
);
CREATE INDEX "answers_question_id_index" ON
    "Answers"("question_id");
ALTER TABLE
    "Answers" ADD SERIAL PRIMARY KEY("answer_id");
CREATE TABLE "Photos"(
    "photo_id" INTEGER NOT NULL,
    "answer_id" INTEGER NOT NULL,
    "url" VARCHAR(255) NOT NULL
);
CREATE INDEX "photos_answer_id_index" ON
    "Photos"("answer_id");
ALTER TABLE
    "Photos" ADD SERIAL PRIMARY KEY("photo_id");
ALTER TABLE
    "Photos" ADD CONSTRAINT "photos_answer_id_foreign" FOREIGN KEY("answer_id") REFERENCES "Answers"("answer_id");
ALTER TABLE
    "Answers" ADD CONSTRAINT "answers_question_id_foreign" FOREIGN KEY("question_id") REFERENCES "Questions"("question_id");