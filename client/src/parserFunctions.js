import axios from 'axios';

const parserFunctions = {
  getRelatedItems: (productId, cachedProducts) => {
    return axios.get(`/products/${productId}/related`)
      .then(({data}) => {
        let relatedProducts = data.map(product => {
          if (cachedProducts[product]) {
            return ['find'];
          } else {
            return axios.get(`./products/${product}`)
              .then(({data}) => {
                let productInfo = {
                  currentProduct: data[0],
                  productStylesArray: data[1].results,
                  reviews: {
                    reviewsMetadata: data[4],
                    reviews: data[3],
                  },
                  questionList: data[2]
                };
                return productInfo;});
          }
        });
        return Promise.all(relatedProducts);
      })
      .catch(err => {
        alert(`Error encountered: ${err}`);
      });
  }





};

export default parserFunctions;