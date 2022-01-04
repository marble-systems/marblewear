const axios = require('axios');

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx';
const api_key = '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';

axios.interceptors.response.use((response) => {
  return response.data;
});

module.exports = {
  getProductInfo: (productID) => {
    return axios({
      url: `${url}/products/${productID}`,
      method: 'get',
      // transformResponse: [function (data) { return data.data; }],
      headers: { 'Authorization': api_key }
    });
  },
  getProductStyles: (productID) => {
    return axios({
      url: `${url}/products/${productID}/styles`,
      method: 'get',
      // transformResponse: [function (data) { return data.data; }],
      headers: { 'Authorization': api_key }
    });
  },
  getReviews: (productID) => {
    return axios({
      url: `${url}/reviews?product_id=${productID}`,
      method: 'get',
      // transformResponse: [function (data) { return data.data; }],
      headers: { 'Authorization': api_key }
    });
  },
  getReviewsMetadata: (productID) => {
    return axios({
      url: `${url}/reviews/meta?product_id=${productID}`,
      method: 'get',
      // transformResponse: [function (data) { return data.data; }],
      headers: { 'Authorization': api_key }
    });
  },
  getQuestions: (productID) => {
    return axios({
      url: `${url}/qa/questions?product_id=${productID}`,
      method: 'get',
      // transformResponse: [function (data) { return data.data; }],
      headers: { 'Authorization': api_key }
    });
  }
};