import React from 'react';

import Reviews from './Reviews/Reviews.jsx';
import ProductOverview from './ProductDetails/ProductOverview.jsx';
import QuestionList from './Q&A/Q&Alist.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';

import Reviewsdata from './Reviews/reviewsData.js';
import QuestionListdata from './Q&A/Q&AlistData.js';
import relatedItemsdata from './RelatedItems/relatedItemsData.js';
import productListDummyData  from './ProductDetails/productListDummyData.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductID: 0,
      productList: productListDummyData,
      reviews: [],
      questionList: [],
      relatedItems: relatedItemsdata
    }
  }



  render () {
    return (
      <div>
        <h1> Hello World </h1>
        <ProductOverview
          products={this.state.productList}
          currentProductID={this.state.currentProductID}/>
        <Reviews productId={Reviewsdata}/>
        <QuestionList data={QuestionListdata}/>
        <RelatedItems relatedItemsdata={this.state.relatedItems}/>
      </div>
    )
  }
}


export default App;