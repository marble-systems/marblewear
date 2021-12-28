import React, { useState } from "react";
import './prodStyles.css';

function ImageGallery ({styles, currentProductID, currentStyleID}) {

  const getCurrentProductObject = (targetId, allProducts) => {
    return allProducts.filter((product) => {
      return product.product_id === targetId
    })
  }

  const currentProductObject = getCurrentProductObject(currentProductID, styles);

  const getStylesArray = (targetStyleId, stylesArray) => {
    return stylesArray.filter((style) => {
      return style.style_id === targetStyleId
    })
  }

  const stylesArray = currentProductObject[0]['results'];

  const currentStyleObject = getStylesArray(currentStyleID, stylesArray)

  const imageGallery = currentStyleObject[0]['photos'].map((photo) => photo.thumbnail_url)

  const [currentImage, updateMainImage] = useState(imageGallery[0])

  const setThumbnailClass = (image) => {
    return image === currentImage ? "imageThumbnailMain" : "imageThumbnail"
  }

  return (
    <div>
      <img class="mainImage" src={currentImage}/>
      {imageGallery.map((image) =>
      <img
        class={setThumbnailClass(image)}
        src={image}
        onClick={(e) => updateMainImage(image)}/>
      )}
    </div>
  )
}

export default ImageGallery;