const express = require('express');
const cors = require('cors');
const port = 3070;
const api = require('./helpers.js');

const app = express();

/* EXPRESS MIDDLEWARE */

app.use(express.static(__dirname + '/../client/dist/'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


/* PRODUCT DATA COMPONENT INITIALIZER */

app.get('/products/:productID', (req, res) => {
  const productID = req.params.productID;
  let totalProductInfo = [api.getProductInfo(productID), api.getProductStyles(productID), api.getQuestions(productID), api.getReviews(productID), api.getReviewsMetadata(productID)];
  Promise.all(totalProductInfo)
    .then(results => {
      res.status(200).send(results);
    })
    .catch((err) => {
      res.status(503).send(err);
    });
});

/* CART HANDLERS */

app.get('/cart', (req, res) => {
  api.handleCart('get')
    .then(response => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(503).send(err);
    });
});

app.post('/cart', (req, res) => {
  const { sku_id } = req.body;
  api.handleCart('post', sku_id)
    .then(response => {
      res.status(201).send(response);
    })
    .catch((err) => {
      res.status(503).send(err);
    });
});

/* RELATED PRODUCT HANDLERS */

app.get('/products/:product_id/related', (req, res) => {
  const productID = req.params.product_id;
  api.getRelatedProducts(productID)
    .then(response => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(503).send(err);
    });
});

/* R&R POST/PUT HANDLERS */

app.post('/reviews', (req, res) => {
  console.log('you accessed the server, here is the data: ', req.body);
  api.postReview(req.body)
    .then((success) => {
      res.status(201).send(success);
    })
    .catch((err) => {
      res.status(503).send(err);
    });
});

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

/* Q&A POST/PUT HANDLERS */

app.post('/qa/questions', (req, res) => {
  api.postQuestion(req.body)
    .then((success) => {
      res.status(201).send(success);
    })
    .catch((err) => {
      res.status(503).send(err);
    });
});

app.put('/qa/questions/:question_id/:type', (req, res) => {
  const questionID = req.params.question_id;
  const type = req.params.type;
  api.markQuestion(questionID, type)
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      res.status(503).send(err);
    });
});

app.put('/qa/answers/:answer_id/:type', (req, res) => {
  const answerID = req.params.answer_id;
  const type = req.params.type;
  api.markAnswer(answerID, type)
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      res.status(503).send(err);
    });
});



app.listen(port, () => {console.log(`listening on ${port}`);});