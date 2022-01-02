/* eslint-disable react/prop-types */
import React from 'react';
import QuestionListEntry from './QuestionListEntry.jsx';
import AddQuestion from './AddQuestion.jsx';
import { answerFormatter } from './Utilities.js';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsShown: 2,
      searchBarInput: '',
      questionList: this.props.data
    };
    this.loadMoreQuestions = this.loadMoreQuestions.bind(this);
    this.handleSearchBarInputChange = this.handleSearchBarInputChange.bind(this);
  }

  loadMoreQuestions() {
    let { questionsShown } = this.state;
    questionsShown += 2;
    this.setState({questionsShown});
  }

  handleSearchBarInputChange(e) {
    this.setState({searchBarInput: e.target.value});
  }

  render() {
    const questions = this.state.questionList.results;
    return (
      <div className="container" maxHeight="vh-100">
        <p className="text-start fs-5 fw-light">
        Questions and Answers
        </p>

        {/* SEARCH/FILTER BAR */}

        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={this.handleSearchBarInputChange}></input>
          <span className="btn btn-outline-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" /></svg>
          </span>
        </div>

        {/* QUESTION LIST FILTERED BY 'QUESTIONSSHOWN' AND SEARCH INPUT */}

        <div className="row">
          {questions
            .filter((q, i) => { return i < this.state.questionsShown; })
            .filter((q) => { return this.state.searchBarInput.length >= 3 ? q.question_body.includes(this.state.searchBarInput) : q; })
            .map((question, index) => {
              return <QuestionListEntry key={index} data={question} currentProductName={this.props.currentProductName} answers={answerFormatter(question.answers)}/>;
            })
          }
        </div>
        <div className="d-inline-flex">

          {/* MORE ANSWERED QUESTIONS BUTTON (INCREMENTS 'QUESTIONSSHOWN') */}

          <div className="inline-flex">
            {this.state.questionsShown >= questions.length ? null :
              <button className="btn btn-light border-4 border-dark" id="loadMoreQuestionsButton" onClick={this.loadMoreQuestions}>Load More Questions</button>
            }
          </div>

          {/* ADD QUESTION BUTTON */}

          <div className="inline-flex">
            <AddQuestion currentProductName={this.props.currentProductName} />
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionList;
