var HasChildNodes = require("./HasChildNodes.js");
var NodeList = require("./NodeList.js");
var mixin=require("./mixin.js");

var DocumentFragment = function (nodeList){
  HasChildNodes.call(this);
  this.childNodes = NodeList(nodeList);
  return this;
};
DocumentFragment.prototype = {
  nodeType: 11,
};
mixin(DocumentFragment.prototype, HasChildNodes.prototype);
module.exports = DocumentFragment;
