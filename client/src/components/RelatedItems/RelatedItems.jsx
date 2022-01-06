import React from 'react';
import PropTypes from 'prop-types';

import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';

function RelatedItems({relatedProductsInfo, currentProduct, favoriteProducts, addProductToFavorites}) {
  return (
    <div>
      <RelatedProducts currentProductInfo={currentProduct} relatedProductsInfo={relatedProductsInfo}/>
      <YourOutfit outfitProductsInfo={favoriteProducts} addProductToFavorites={addProductToFavorites}/>
    </div>
  );
}

RelatedItems.propTypes = {
  relatedProductsInfo: PropTypes.array,
  currentProduct: PropTypes.object,
  favoriteProducts: PropTypes.array,
  addProductToFavorites: PropTypes.func,
};

export default RelatedItems;