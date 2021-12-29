import React from 'react';

import ProductCard from './ProductCard.jsx';
import ComparisonModal from './ComparisonModal.jsx';

function RelatedProducts({currentProductInfo, relatedProductsInfo}) {
  return (
    <div>
      {relatedProductsInfo.map(relatedProductInfo => {
        return <ProductCard relatedProductInfo={relatedProductInfo}/>
      })}
      <ComparisonModal />
    </div>
  )
}

export default RelatedProducts;