import React from 'react';

import AddOutfit from './AddOutfit.jsx';
import ProductCard from './ProductCard.jsx';

function YourOutfit({outfitProductsInfo}) {
  return (
    <div>
      <AddOutfit />
      {outfitProductsInfo.map(outfitProductInfo => {
        return <ProductCard outfitProductInfo={outfitProductInfo} />
      })}
    </div>
  )
}

export default YourOutfit;