import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard.jsx';
import ComparisonModal from './ComparisonModal.jsx';
import './relatedItemsStyle.css';

function RelatedProducts({currentProductInfo, relatedProductsInfo}) {
  return (
    <div>
      <p>RELATED PRODUCTS</p>
      <div className="main-gallery js-flickity" data-flickity='{"pageDots": false, "cellAlign": "left"}'>
        {relatedProductsInfo.map((relatedProductInfo, index) => {
          return (<ProductCard key={index} relatedProductInfo={relatedProductInfo}/>);
        })}
      </div>
      <ComparisonModal currentProductInfo={currentProductInfo}/>
    </div>
  );
}

RelatedProducts.propTypes = {
  currentProductInfo: PropTypes.object,
  relatedProductsInfo: PropTypes.array
};

export default RelatedProducts;