import React from 'react';
import './prodStyles.css';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector  from './StyleSelector.jsx';


function ProductOverview ({productList, currentProductID, currentStyleID, changeCurrentStyle, imageGallery}) {
  return (
    <div>
      <h2>__________START OF PRODUCT OVERVIEW__________</h2>


     <h3>__________ImageGallery__________</h3>
     <ImageGallery
       imageGallery={imageGallery}
       styles={productList.productStyles}
       currentProductID={currentProductID}
       currentStyleID={currentStyleID}
       />


      <h3>__________Title, Price, Category__________</h3>
     <h4>{productList.productToDisplay.category}</h4>
     <h3>{productList.productToDisplay.name}</h3>
     <h4>{`$${productList.productToDisplay.default_price}`}</h4>

     <h3>__________StyleSelector__________</h3>
     <StyleSelector
       styles={productList.productStyles}
       currentStyleID={currentStyleID}
       changeCurrentStyle={changeCurrentStyle}/>

     <h3>__________Drop downs and Buttons__________</h3>
      <select
        className="select"
        name ="size"
        onChange={e => alert(`Size ${e.target.value} selected`)}>
        <option value="Small"> Small </option>
        <option value="Medium"> Medium </option>
        <option value="Large"> Large </option>
        <option value="XL"> XL </option>
      </select>

      <select
        className="select"
        name ="quantity"
        onChange={e => alert(`Quantity of ${e.target.value} selected`)}>
        <option value="1"> 1 </option>
        <option value="2"> 2 </option>
        <option value="3"> 3 </option>
        <option value="4"> 4 </option>
        <option value="5"> 5 </option>
      </select>

      <button
        className = "button"
        type="submit"
        onClick={e => alert(`${productList.productToDisplay.name} added to Favorites`)}>
        ADD TO BAG
      </button>

      <button
        className = "button"
        id="favorite"
        type="submit"
        onClick={e => alert(`${productList.productToDisplay.name} added to Cart`)}>
        Favorite
      </button>
      <h3>___________________________________</h3>

      <h3>__________Slogan, Description__________</h3>

      <h5>{productList.productToDisplay.slogan}</h5>
      <h5>{productList.productToDisplay.description}</h5>
      <h3>___________________________________</h3>

      <h2>__________END OF PRODUCT OVERVIEW__________</h2>

    </div>
  )
}

export default ProductOverview;