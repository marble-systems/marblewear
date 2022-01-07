import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AddOutfit from './AddOutfit.jsx';
import ProductCard from './ProductCard.jsx';
import './relatedItemsStyle.css';

function YourOutfit({outfitProductsInfo, addProductToFavorites, removeProductFromFavorites}) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const carrouselLength = outfitProductsInfo.length;

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
              <AddOutfit addProductToFavorites={addProductToFavorites}/>
              {outfitProductsInfo.map((outfitProductInfo) => {
                return (<ProductCard key={outfitProductInfo.currentProduct.id} relatedProductInfo={outfitProductInfo} productCardType={'YourOutfit'} removeProductFromFavorites={removeProductFromFavorites}/>);
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
    </div>
  );
}

YourOutfit.propTypes = {
  outfitProductsInfo: PropTypes.array,
  addProductToFavorites: PropTypes.func,
  removeProductFromFavorites: PropTypes.func,
};

export default YourOutfit;