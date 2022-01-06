import React from 'react';
import PropTypes from 'prop-types';

import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';

function RelatedItems({relatedProductsInfo, currentProduct}) {
  return (
    <div>
      <RelatedProducts currentProductInfo={currentProduct} relatedProductsInfo={relatedProductsInfo}/>
      <YourOutfit outfitProductsInfo={[]}/>
    </div>
  );
}

RelatedItems.propTypes = {
  relatedProductsInfo: PropTypes.array,
  currentProduct: PropTypes.object,
};

export default RelatedItems;