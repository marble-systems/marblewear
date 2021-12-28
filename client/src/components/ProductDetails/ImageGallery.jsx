import React, { useState } from "react";
import './prodStyles.css';

function ImageGallery ({styles, imageGallery, currentProductID, currentStyleID}) {

  const getCurrentProductObject = (targetId, allProducts) => {
    return allProducts.filter((product)=>{
      return product.product_id === targetId
    })
  }

  const currentProduct = getCurrentProductObject(currentProductID, styles);


  const getCurrentStyle = (targetStyleId, stylesArray) => {
    return stylesArray.filter((style) => {
      return style.style_id === Number(targetStyleId)
    })
  }
  const arrayOfStyles = currentProduct[0]['results'];


  const currentStyleObject = getCurrentStyle(currentStyleID, arrayOfStyles)

console.log('currentStyleObject[0]', currentStyleObject[0]['photos'])

  const imageGallery2 = currentStyleObject[0]['photos'].map((photo)=> photo.thumbnail_url)

  console.log('imageGallery2', imageGallery2)

  const [currentImage, updateMainImage] = useState(imageGallery2)
  const setThumbnailClass = (image) => {
    return image === currentImage ? "imageThumbnailMain" : "imageThumbnail"
  }


  const enterExpandedView = () => {
  }

  return (
    <div>
      <img class="mainImage" src={imageGallery2[0]}/>

      {imageGallery2.map((image) =>
      <img
        class={setThumbnailClass(image)}
        src={image}
        onClick={(e) => updateMainImage(image)}/>
      )}

    </div>
  )
}

export default ImageGallery;