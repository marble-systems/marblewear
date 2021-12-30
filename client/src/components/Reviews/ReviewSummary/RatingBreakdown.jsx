import React from 'react';
import PropTypes from 'prop-types';
import StarRatingBar from './StarRatingBar.jsx';

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilters: []
    };
  }

  updateFilters(filter) {
    let { selectedFilters } = this.state;
    const { updateFilters } = this.props;
    const filterIdx = selectedFilters.indexOf(filter);
    if (filter === undefined) {
      selectedFilters = [];
      this.setState({ selectedFilters });
    } else if (filterIdx < 0) {
      selectedFilters.push(filter);
      selectedFilters.sort();
      this.setState({ selectedFilters });
    } else {
      selectedFilters.splice(filterIdx, 1);
    }
    updateFilters(selectedFilters);
  }

  render() {
    const { starsCount, ratingsCount } = this.props;
    const { selectedFilters } = this.state;
    return (
      <div style={{ width: '14em' }}>
        <h3 style={{ fontSize: '2em' }}>Rating Breakdown</h3>
        <div style={{ fontSize: '0.8em' }}>
          {selectedFilters.length === 0
            ? '\xa0'// non-breaking space
            : <span>{selectedFilters
              .map(el => el + '-')
              .join(', ')
              .replace(/, ([^,]*)$/, ' and $1') // add 'and' between 2nd-to-last and last-item
            } star reviews
            </span>}
        </div>
        <div>
          {selectedFilters.length === 0
            ? '\xa0'// non-breaking space
            : <span
              style={{ cursor: 'pointer', fontSize: '0.8em' }}
              onClick={() => { this.updateFilters(); }}>
              Remove all filters
            </span>
          }
        </div>
        {Array(5).fill(0)
          .map((val, idx) => { return 5 - idx; })
          .map(idx => {
            let reviews = starsCount[idx] === undefined ? 0 : starsCount[idx];
            let percentage = Math.floor(reviews / ratingsCount * 100);
            return (
              <StarRatingBar
                key={idx}
                stars={idx}
                reviews={reviews}
                handleClick={this.updateFilters.bind(this)}
                percentage={percentage} />
            );
          })}
      </div>
    );
  }
}

RatingBreakdown.propTypes = {
  starsCount: PropTypes.object.isRequired,
  ratingsCount: PropTypes.number.isRequired,
  updateFilters: PropTypes.func.isRequired
};

export default RatingBreakdown;
