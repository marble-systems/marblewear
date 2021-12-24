import React from 'react';
import css from './prodStyles.css';

// products={this.state.productList}
// currentProductID={this.state.currentProductID}/

//will render Current product

function ProductOverview ({products, currentProductID}) {
  return (
    <div>
      <h2>_________________START OF PROD OVERVIEW_____________</h2>

     <p> Image Gallery Component + thumbnails(top left of page) </p>

      <h4>{products.productToDisplay.name}</h4>
      <p>styles will go here. on click, will change images</p>


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
        onClick={e => alert(`you have favorited ${products.productToDisplay.name}`)}>
        ADD TO BAG
      </button>


      <button
        className = "button"
        id="favorite"
        type="submit"
        onClick={e => alert(`you have added ${products.productToDisplay.name} to your card`)}>
        Favorite
      </button>


      <h5>{products.productToDisplay.slogan}</h5>
      <h5>{products.productToDisplay.description}</h5>
      <h2>_________________END OF PROD OVERVIEW_____________</h2>




    </div>
  )
}

export default ProductOverview;