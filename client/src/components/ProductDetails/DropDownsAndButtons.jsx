/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './prodStyles.css';


function DropDownsAndButtons ({productStylesArray, currentStyleID}) {

  const getCurrentStyleObject = (targetStyleId, stylesArray) => {
    return stylesArray.filter((style) => {
      return style.style_id === targetStyleId;
    });
  };

  const [inventory, updateInventory] = useState(5);

  const currentStyleObject = getCurrentStyleObject(currentStyleID, productStylesArray);

  const availableSkus = currentStyleObject[0]['skus'];

  const skusArray = [];

  for (const key of Object.keys(availableSkus)) {
    skusArray.push(key);
  }

  let inventoryArray = [];
  for(var i = 1; i <inventory+1; i++){
    inventoryArray.push(i);
  }

  //Need to finish this function in order for the inventory drop down to be dynamic according to size selected
  const updateInventoryarray = (newInventory) => {
    let inventoryArray = [];
    for(var i = 1; i <inventory+1; i++){
      inventoryArray.push(i);
    }
    return inventoryArray;
  };


  return (
    <div className="container">
      <div className="row">
        <select
          className="select selectSize"
          name ="size"
          value={skusArray}
          onChange={e => {
            updateInventory(8);
            alert(`Size ${e.target.value} selected`);}
          }>
          {skusArray.map((sku) => {
            return <option key={sku}> {availableSkus[sku]['size']} </option>;
          })}
        </select>

        <select
          className="select quantity"
          name ="quantity"
          onChange={e => alert(`Quantity of ${e.target.value} selected`)}>
          {inventoryArray.map((num)=> <option key={num} value={num}> {num} </option>)}
        </select>
      </div>

      <div className="row">
        <button
          type="submit"
          className = "button cart"
          onClick={() => alert(`${currentStyleObject.name} added to Favorites`)}>
        ADD TO BAG
        </button>

        <button
          className = "button favorite"
          id="favorite"
          type="submit"
          onClick={() => alert(`${currentStyleObject.name} added to Cart`)}>
        *
        </button>
      </div>
    </div>
  );
}

export default DropDownsAndButtons;

