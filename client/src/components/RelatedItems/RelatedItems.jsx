import React from 'react';

import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';

function RelatedItems({relatedItemsdata}) {
  const {
    currentProductInfo,
    relatedProducts,
    relatedProductsInfo,
    outfitProductInfo
  } = relatedItemsdata;
  return (
    <div>
      <RelatedProducts currentProductInfo={currentProductInfo} relatedProductsInfo={relatedProductsInfo}/>
      <YourOutfit outfitProductInfo={outfitProductInfo}/>
    </div>
  )
}

export default RelatedItems;