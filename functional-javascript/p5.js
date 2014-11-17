'use strict';

function checkUsersValid(goodUsers) {

  return function(submittedUsers) {

    return submittedUsers.every(function (subUser) {

      return goodUsers.some(function (goodUser) {

        return subUser.id === goodUser.id;

      });

    });

  };

}

module.exports = checkUsersValid
