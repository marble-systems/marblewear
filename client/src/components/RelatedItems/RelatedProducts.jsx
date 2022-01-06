import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard.jsx';
import ComparisonModal from './ComparisonModal.jsx';
import './relatedItemsStyle.css';

function RelatedProducts({currentProductInfo, relatedProductsInfo}) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const carrouseLength = relatedProductsInfo.length;

  let previousButtonOnClick = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  let nextButtonOnClick = () => {
    if (currentCardIndex < (carrouseLength - 3)) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  return (
    <div>
      <p>RELATED PRODUCTS</p>
      <div className="carousel">
        {currentCardIndex > 0 &&
          <button onClick={previousButtonOnClick} className="previous-button">
            &lt;
          </button>
        }
        <div className="carousel-wrapper">
          <div className="carousel-card" style={{transform: `translateX(-${currentCardIndex * (100 / 3.81)}%)`}}>
            {relatedProductsInfo.map((relatedProductInfo, index) => {
              return (<ProductCard key={index} relatedProductInfo={relatedProductInfo}/>);
            })}
          </div>
        </div>
        {currentCardIndex < (carrouseLength - 3) &&
          <button onClick={nextButtonOnClick} className="next-button">
              &gt;
          </button>
        }
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