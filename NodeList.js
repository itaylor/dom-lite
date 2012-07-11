var NodeList = function (arr){
  arr = arr || [];
  arr.item = function (idx){
    return arr.get(idx);
  };
  return arr;
};
module.exports = NodeList;