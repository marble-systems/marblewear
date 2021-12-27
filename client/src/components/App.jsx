import React from 'react';

import Reviews from './Reviews/Reviews.jsx';
import ProductOverview from './ProductDetails/ProductOverview.jsx';
import QuestionList from './Q&A/Q&Alist.jsx';
import RelatedItems from './relatedItems/RelatedItems.jsx';

import Reviewsdata from './Reviews/reviewsData.js';
import QuestionListdata from './Q&A/Q&AlistData.js';
import relatedItemsdata from './relatedItems/relatedItemsData.js';

import productListDummyData  from './ProductDetails/productListDummyData.js';
import sampleThumbnails from './ProductDetails/sampleData/imageThumbnailsArray.js'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductID: 0,
      productList: productListDummyData,
      reviews: [],
      questionList: [],
      relatedItems: [],
      imageGallery: sampleThumbnails,
    }
  }



  render () {
    return (
      <div>
        <h1> Hello World </h1>
        <ProductOverview
          products={this.state.productList}
          currentProductID={this.state.currentProductID}
          imageGallery={this.state.imageGallery}
          />
        <Reviews productId={Reviewsdata}/>
        <QuestionList data={QuestionListdata}/>
        <RelatedItems data={relatedItemsdata}/>
      </div>
    )
  }
}


export default App;