import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard.jsx';
import ComparisonModal from './ComparisonModal.jsx';
import './relatedItemsStyle.css';

function RelatedProducts({currentProductInfo, relatedProductsInfo, changeCurrentProduct}) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const carrouselLength = relatedProductsInfo.length;

  let previousButtonOnClick = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  let nextButtonOnClick = () => {
    if (currentCardIndex < (carrouselLength - 3)) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  return (
    <div>
      <p>RELATED PRODUCTS</p>
      <div className="carousel">
        <div className="carousel-wrapper">
          {currentCardIndex > 0 &&
            <button onClick={previousButtonOnClick} className="previous-button">
              &lt;
            </button>
          }
          <div className="carousel-inner">
            <div className="carousel-card" style={{ transform: `translateX(-${currentCardIndex * (100 / 3.81)}%)` }}>
              {relatedProductsInfo.map((relatedProductInfo) => {
                return (<ProductCard key={relatedProductInfo.currentProduct.id} relatedProductInfo={relatedProductInfo} changeCurrentProduct={changeCurrentProduct} productCardType={'RelatedProducts'} />);
              })}
            </div>
          </div>
          {currentCardIndex < (carrouselLength - 3) &&
            <button onClick={nextButtonOnClick} className="next-button">
                &gt;
            </button>
          }
        </div>
      </div>
      <ComparisonModal currentProductInfo={currentProductInfo}/>
    </div>
  );
}

RelatedProducts.propTypes = {
  currentProductInfo: PropTypes.object,
  relatedProductsInfo: PropTypes.array,
  changeCurrentProduct: PropTypes.func,
};

export default RelatedProducts;