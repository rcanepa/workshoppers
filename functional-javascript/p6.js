'use strict';

function countWords(inputWords) {

  return inputWords.reduce(function (nemo, word) {
    if (word in nemo) {
      nemo[word] += 1;
    }
    else
      nemo[word] = 1;
    return nemo;
  }, {});

}

module.exports = countWords
