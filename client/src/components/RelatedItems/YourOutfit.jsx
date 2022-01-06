import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AddOutfit from './AddOutfit.jsx';
import ProductCard from './ProductCard.jsx';
import './relatedItemsStyle.css';

function YourOutfit({outfitProductsInfo}) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const carrouseLength = outfitProductsInfo.length;

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
      <p>YOUR OUTFIT</p>
      <div className="carousel">
        <div className="carousel-wrapper">
          {currentCardIndex > 0 &&
            <button onClick={previousButtonOnClick} className="previous-button">
              &lt;
            </button>
          }
          <div className="carousel-inner">
            <div className="carousel-card" style={{ transform: `translateX(-${currentCardIndex * (100 / 3.81)}%)` }}>
              <AddOutfit />
              {outfitProductsInfo.map((outfitProductInfo, index) => {
                return (<ProductCard key={index} outfitProductInfo={outfitProductInfo} />);
              })}
            </div>
          </div>
          {currentCardIndex < (carrouseLength - 3) &&
            <button onClick={nextButtonOnClick} className="next-button">
                &gt;
            </button>
          }
        </div>
      </div>
    </div>
  );
}

YourOutfit.propTypes = {
  outfitProductsInfo: PropTypes.array
};

export default YourOutfit;