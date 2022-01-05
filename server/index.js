const express = require('express');
const cors = require('cors');
const port = 3070;
const api = require('./helpers.js');

const app = express();

app.use(express.static(__dirname + '/../client/dist/'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


/* MAIN PRODUCT ID GET HANDLER */

app.get('/products/:productID', (req, res) => {
  const productID = req.params.productID;
  let totalProductInfo = [api.getProductInfo(productID), api.getProductStyles(productID), api.getQuestions(productID), api.getReviews(productID), api.getReviewsMetadata(productID)];
  Promise.all(totalProductInfo)
    .then(results => {
      res.status(200).send(results);
    })
    .catch(error => {
      res.status(503).send(error);
    });
});

/* R&R POST/PUT HANDLERS */

app.put('/reviews/:review_id/:type', (req, res) => {
  const reviewID = req.params.review_id;
  const type = req.params.type;
  api.markReview(reviewID, type)
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      res.status(503).send(err);
    });
});

/* app.post('/reviews) - to be implemented */

/* Q&A POST/PUT HANDLERS */

app.put('/qa/questions/:question_id/:type', (req, res) => {
  const questionID = req.params.question_id;
  const type = req.params.type;
  api.markReview(questionID, type)
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      res.status(503).send(err);
    });
});





app.listen(port, () => {console.log(`listening on ${port}`);});