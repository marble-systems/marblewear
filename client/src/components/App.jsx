import React from 'react';
import Reviews from './Reviews/Reviews.jsx';
import ProductOverview from './ProductDetails/ProductOverview.jsx';
import QuestionList from './QandA/QuestionList.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import NavBar from './Navbar.jsx';

import Reviewsdata from './Reviews/reviewsData.js';
import QuestionListdata from './QandA/QandAListData.js';
import relatedItemsdata from './RelatedItems/relatedItemsData.js';
import productListDummyData from './ProductDetails/sampleData/productListDummyData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductID: '39333',
      currentStyleID: 234004,
      productStylesArray: productListDummyData.productStyles.results,
      currentProduct: productListDummyData.productToDisplay,
      reviews: [],
      questionList: QuestionListdata,
      relatedItems: relatedItemsdata,

    };
    this.changeCurrentStyle = this.changeCurrentStyle.bind(this);

  }


  changeCurrentStyle(id) {
    this.setState({ currentStyleID: id });
  }


  render() {
    return (
      <div className="container">
        <div>
          <NavBar />
          <ProductOverview
            currentProduct={this.state.currentProduct}
            productStylesArray={this.state.productStylesArray}
            currentStyleID={this.state.currentStyleID}
            changeCurrentStyle={this.changeCurrentStyle}
          />
          <RelatedItems relatedItemsdata={this.state.relatedItems} />
          <QuestionList
            data={this.state.questionList.QuestionListdata.QuestionList}
            currentProductID={this.state.currentProductID}
            currentProductName={this.state.questionList.QuestionListdata.currentProductInfo.name}/>
          <Reviews productId={Reviewsdata}/>
        </div>
      </div>
    );
  }
}


export default App;