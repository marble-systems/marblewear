import React from 'react';

import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';

function RelatedItems({relatedItemsdata}) {
  const {
    currentProductInfo,
    relatedProducts,
    relatedProductsInfo,
    outfitProductsInfo
  } = relatedItemsdata;
  return (
    <div>
      <RelatedProducts currentProductInfo={currentProductInfo} relatedProductsInfo={relatedProductsInfo}/>
      <YourOutfit outfitProductsInfo={outfitProductsInfo}/>
    </div>
  )
}

export default RelatedItems;