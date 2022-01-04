import React from 'react';
import axios from 'axios';
import Reviews from './Reviews/Reviews.jsx';
import ProductOverview from './ProductDetails/ProductOverview.jsx';
import QuestionList from './QandA/QuestionList.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import NavBar from './Navbar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductID: '',
      currentStyleID: 234004,
      productList: [],
      reviews: [],
      questionList: [],
      relatedItems: [],
    };
    this.cachedProducts = {};
    this.changeCurrentStyle = this.changeCurrentStyle.bind(this);
  }

  componentDidMount() {
    this.getProductData('39333');
  }

  getProductData(productId) {
    let currentProduct = this.cachedProducts.productId;
    if (currentProduct) {
      let {productList, reviews, questionList} = currentProduct;
      this.setState({
        currentProductID: productId,
        productList,
        reviews,
        questionList
      });
    } else {
      axios.get('./products', {
        params: {
          productId
        }
      })
        .then(result => {
          this.cachedProducts.productId = result;
          this.getProductData(productId);
        })
        .catch(err => {
          alert(`Error ${err} occured`);
        });
    }
  }

  changeCurrentStyle(id) {
    this.setState({ currentStyleID: id });
  }

  render() {
    return (
      <div>
        <NavBar />
        <ProductOverview
          productList={this.state.productList}
          currentProductID={this.state.currentProductID}
          currentStyleID={this.state.currentStyleID}
          changeCurrentStyle={this.changeCurrentStyle}
        />
        <div className="container">
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