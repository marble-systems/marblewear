const axios = require('axios');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc';
const { api_key }= require('./config.js');
const auth = { 'Authorization': api_key };

axios.interceptors.response.use((response) => {
  return response.data;
});

const generateUrlParams = (object) => {
  return Object.keys(object)
    .map(key => `${key}=${object[key]}`)
    .join('&');
};

module.exports = {

  /* MAIN GET HELPERS */

  getProductInfo: (productID) => {
    return axios({
      url: `${url}/products/${productID}`,
      method: 'get',
      headers: auth
    });
  },
  getProductStyles: (productID) => {
    return axios({
      url: `${url}/products/${productID}/styles`,
      method: 'get',
      headers: auth
    });
  },
  getReviews: (params) => {
    const queryParams = generateUrlParams(params);
    return axios({
      url: `${url}/reviews?${queryParams}`,
      method: 'get',
      headers: auth
    });
  },
  getReviewsMetadata: (productID) => {
    return axios({
      url: `${url}/reviews/meta?product_id=${productID}`,
      method: 'get',
      headers: auth
    });
  },
  getQuestions: (productID) => {
    return axios({
      url: `http://127.0.0.1:3001/qa/questions?product_id=${productID}`,
      method: 'get',
      headers: auth
    });
  },

  /* CART HELPERS */

  handleCart: (method, sku_id) => {
    return axios({
      url: `${url}/cart`,
      method: method,
      data: {sku_id},
      headers: auth
    });
  },

  /* RELATED PRODUCTS HELPERS */

  getRelatedProducts: (productID) => {
    return axios({
      url: `${url}/products/${productID}/related`,
      method: 'get',
      headers: auth
    });
  },

  /* QUESTIONS AND ANSWERS HELPERS */

  markQuestion: (question_id, putType) => {
    return axios({
      url: `http://localhost:3001/qa/questions/${question_id}/${putType}`,
      method: 'put',
      headers: auth
    });
  },

  markAnswer: (question_id, answer_id, putType) => {
    return axios({
      url: `http://localhost:3001/qa/answers/${answer_id}/${putType}`,
      body: question_id,
      method: 'put',
      headers: auth
    });
  },

  postQuestion: (questionParams) => {
    return axios({
      url: 'http://localhost:3001/qa/questions',
      method: 'post',
      data: questionParams,
      headers: auth
    });
  },

  postAnswer: (question_id, answerParams) => {
    return axios({
      url: `http://localhost:3001/qa/questions/${question_id}/answers`,
      method: 'post',
      data: answerParams,
      headers: auth
    });
  },

  /* RATINGS AND REVIEWS HELPERS */

  markReview: (review_id, putType) => {
    return axios({
      url: `${url}/reviews/${review_id}/${putType}`,
      method: 'put',
      headers: auth
    });
  },

  postReview: (reviewParams) => {
    return axios({
      url: `${url}/reviews`,
      method: 'post',
      data: reviewParams,
      headers: auth
    });
  },

};