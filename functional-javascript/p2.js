function repeat(operation, num) {
  'use strict';
  if (num > 0) {
    operation();
    return repeat(operation, --num);
  }
  return;
}

module.exports = repeat;
