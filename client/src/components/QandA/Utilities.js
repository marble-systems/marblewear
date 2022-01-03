module.exports = {
  answerFormatter: (answersObj) => {
    let resultArr = [];
    for (let key in answersObj) {
      resultArr.push(answersObj[key]);
    }
    return resultArr;
  }
};