var NodeList = function (arr){
  arr = arr || [];
  var that = [].concat(arr);
  //this gets rid of a circular dependency
  arr.item = function (idx){
    return that[idx];
  };
  return arr;
};
module.exports = NodeList;