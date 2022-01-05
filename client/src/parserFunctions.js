import axios from 'axios';

const parserFunctions = {
  getRelatedItems: (productId) => {
    axios.get(`/products/${productId}/related`)
      .then(({data}) => console.log(data))
      .catch(err => console.log(err));
  }





};

export default parserFunctions;