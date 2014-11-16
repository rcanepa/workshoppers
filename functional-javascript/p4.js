function getShortMessages(messages) {
  'use strict';
  return messages.filter(function (obj) {
    return obj.message.length < 50;
  }).map(function (filtered) {
    return filtered.message;
  });

}

module.exports = getShortMessages;
