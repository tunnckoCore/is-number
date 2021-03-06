'use strict';

module.exports = function(arr) {
  var len = arr.length;
  var res = [];

  while (len--) {
    res.push(isNumber(arr[len]));
  }
  return res;
};

function isNumber(n) {
  return !Array.isArray(n) && (n - parseFloat(n) + 1) >= 0;
}
