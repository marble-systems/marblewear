import React from 'react';
import PropTypes from 'prop-types';

import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';

function RelatedItems({relatedProductsInfo, currentProduct, favoriteProducts, addProductToFavorites, removeProductFromFavorites, changeCurrentProduct}) {
  return (
    <div>
      <RelatedProducts currentProductInfo={currentProduct} relatedProductsInfo={relatedProductsInfo} changeCurrentProduct={changeCurrentProduct}/>
      <YourOutfit outfitProductsInfo={favoriteProducts} addProductToFavorites={addProductToFavorites} removeProductFromFavorites={removeProductFromFavorites}/>
    </div>
  );
}

RelatedItems.propTypes = {
  relatedProductsInfo: PropTypes.array,
  currentProduct: PropTypes.object,
  favoriteProducts: PropTypes.array,
  addProductToFavorites: PropTypes.func,
  removeProductFromFavorites: PropTypes.func,
  changeCurrentProduct: PropTypes.func,
};

export default RelatedItems;