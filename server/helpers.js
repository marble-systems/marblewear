const axios = require('axios');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx';
const { api_key }= require('./config.js');
const auth = { 'Authorization': api_key };

axios.interceptors.response.use((response) => {
  return response.data;
});

module.exports = {

  /* MAIN HANDLER HELPERS */

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
  getReviews: (productID) => {
    return axios({
      url: `${url}/reviews?product_id=${productID}`,
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
      url: `${url}/qa/questions?product_id=${productID}`,
      method: 'get',
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

  },

  /* QUESTIONS AND ANSWERS HELPERS */

  markQuestion: (question_id, putType) => {
    return axios({
      url: `${url}/qa/questions/${question_id}/${putType}`,
      method: 'put',
      headers: auth
    });
  },

  markAnswer: (answer_id, putType) => {
    return axios({
      url: `${url}/qa/answers/${answer_id}/${putType}`,
      method: 'put',
      headers: auth
    });
  },

  postQuestion: (questionParams) => {
    const { body, name, email, product_id } = questionParams;
    return axios({
      url: `${url}/qa/questions?body=${body}&name=${name}&email=${email}&product_id=${product_id}`,
      method: 'post',
    });
  }

};