module.exports = {
  answerFormatter: (answersArray) => {
    return answersArray.sort((prev, next) => {return next.helpful - prev.helpful;});
  }
};