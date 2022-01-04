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




app.listen(port, () => {console.log(`listening on ${port}`);});