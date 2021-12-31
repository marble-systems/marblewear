import React from 'react';
import PropTypes from 'prop-types';
import Stars from '../../../SharedComponents/Stars.jsx';
import Modal from '../../../SharedComponents/Modal.jsx';

const SUMMARY_CHAR_LIMIT = 60;
const BODY_CHAR_LIMIT = 250;
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      currentImage: '',
      modalShowing: false
    };
  }

  handleShowMoreClick() {
    let expanded = !this.state.expanded;
    this.setState({ expanded });
  }

  handleToggleModalClick (currentImage) {
    let modalShowing = !this.state.modalShowing;
    this.setState({currentImage, modalShowing});
  }

  handleHelpfulClick() {
    console.log('handleHelpfulClick');
    // TODO: make a PUT request to /reviews/:review_id/helpful
    // https://app-hrsei-api.herokuapp.com/api/fec2/:CAMPUS_CODE/
  }

  handleReportClick() {
    console.log('handleReportClick');
    // TODO: make a PUT request to /reviews/:review_id/report
  }

  render() {
    let { expanded, modalShowing, currentImage } = this.state;
    let { review } = this.props;
    let { rating, summary, recommend, response, body, date, reviewer_name, helpfulness, photos } = review;
    date = new Date(date);
    return (
      <div style={{width: '24em'}}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Stars rating={rating} />
          {`${reviewer_name}, `}
          {`${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}
        </div>
        <div style={{ fontWeight: 'bold' }}>
          {summary.length > SUMMARY_CHAR_LIMIT ? `${summary.substring(0, SUMMARY_CHAR_LIMIT)}...` : summary}
        </div>
        <div>
          {(body.length <= BODY_CHAR_LIMIT || expanded)
            ? body
            : <span>{body.substring(0, BODY_CHAR_LIMIT)}... <a style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={this.handleShowMoreClick.bind(this)}>Show more</a></span>}
        </div>
        <div>
          {recommend
            ? <div>
              <svg height="24px" viewBox="0 0 24 24" width="24px" fill="green">
                <path d="M0 0h24v24H0z" fill="none" /><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              I recommend this product
            </div>
            : ''}
        </div>
        <div>
          {response ? `Response from seller: ${response}` : ''}
        </div>
        <div style={{display: 'flex', flexDirection: 'row', flexShrink: 1}}>
          {photos.map((url, idx) => {
            return (
              <div onClick={()=>{this.handleToggleModalClick(url);}} key={idx} style={{ margin: '5px', cursor: 'pointer'}}>
                <img src={url} width='50px' />
              </div>
            );
          })
          }
        </div>
        <Modal
          show={modalShowing}
          body={currentImage}
          onClose={this.handleToggleModalClick.bind(this)}/>
        Helpful? &nbsp;
        <a style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={this.handleHelpfulClick.bind(this)}>Yes</a>&nbsp;
        {`(${helpfulness}) | `}
        <a style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={this.handleReportClick.bind(this)}>Report</a>
        <div>
        </div>
      </div>
    );
  }
}

/* TODO:
 thumbnail -> full res modal
 if user made transaction -> Verified purchaser
 prevent users from clicking buttons more than once
*/


ReviewListEntry.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewListEntry;