import React from 'react';

import ProductCard from './ProductCard.jsx';
import ComparisonModal from './ComparisonModal.jsx';

function RelatedProducts({currentProductInfo, relatedProductsInfo}) {
  return (
    <div>
      <div class="main-gallery js-flickity" data-flickity='{"pageDots": false, "groupCells": "80%"}'>
        {relatedProductsInfo.map(relatedProductInfo => {
          return <ProductCard relatedProductInfo={relatedProductInfo}/>
        })}
      </div>
      <ComparisonModal />
    </div>
  )
}

export default RelatedProducts;