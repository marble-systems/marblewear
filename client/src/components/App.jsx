import React from 'react';
import axios from 'axios';
import Reviews from './Reviews/Reviews.jsx';
import ProductOverview from './ProductDetails/ProductOverview.jsx';
import QuestionList from './QandA/QuestionList.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import NavBar from './NavBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductID: '',
      currentStyleID: 234004,
      productStylesArray: [],
      currentProduct: [],
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
    let cachedProduct = this.cachedProducts[productId];
    if (cachedProduct) {
      let {currentProduct, productStylesArray, reviews, questionList} = cachedProduct;
      this.setState({
        currentProductID: productId,
        currentProduct,
        productStylesArray,
        reviews,
        questionList
      });
    } else {
      axios.get(`./products/${productId}`)
        .then(({data}) => {
          let productInfo = {
            currentProduct: data[0],
            productStylesArray: data[1].results,
            reviews: {
              reviewsMetadata: data[4],
              reviews: data[3],
            },
            questionList: data[2]
          };
          this.cachedProducts[productId] = productInfo;
          this.getProductData(productId);
        })
        .catch(err => {
          alert(`Error encountered: ${err}`);
        });
    }
  }

  changeCurrentStyle(id) {
    this.setState({ currentStyleID: id });
  }

  render() {
    let { currentProductID, currentProduct, productStylesArray, currentStyleID, changeCurrentStyle, questionList, reviews, relatedItems  } = this.state;
    if (this.state.currentProductID) {
      return (
        <div className="container">

          <NavBar />
          <ProductOverview
            currentProduct={currentProduct}
            productStylesArray={productStylesArray}
            currentStyleID={currentStyleID}
            changeCurrentStyle={changeCurrentStyle}
          />
          {/* <RelatedItems relatedItemsdata={relatedItems} /> */}
          <QuestionList
            data={questionList}
            currentProductID={currentProductID}
            currentProductName={currentProduct.name}/>
          <Reviews
            reviewsData={reviews}
            currentProductID={currentProductID}
          />

        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}


export default App;