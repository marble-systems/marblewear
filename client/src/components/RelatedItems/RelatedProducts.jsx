import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard.jsx';
import ComparisonModal from './ComparisonModal.jsx';

function RelatedProducts({currentProductInfo, relatedProductsInfo}) {
  return (
    <div>
      <div className="main-gallery js-flickity" data-flickity='{"pageDots": false, "groupCells": "80%"}'>
        {relatedProductsInfo.map((relatedProductInfo, index) => {
          return (<ProductCard key={index} relatedProductInfo={relatedProductInfo}/>);
        })}
      </div>
      <ComparisonModal />
    </div>
  );
}

RelatedProducts.propTypes = {
  currentProductInfo: PropTypes.object,
  relatedProductsInfo: PropTypes.array
};

export default RelatedProducts;