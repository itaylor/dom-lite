var Element = require("./Element.js");
var DocumentFragment = require("./DocumentFragment.js");
var TextNode = require("./TextNode.js");
var utils = require("./utils.js");
var NodeList = require("./NodeList.js");
var HasChildNodes = require("./HasChildNodes.js");
var mixin=require("./mixin.js");

var Document = function (){
  HasChildNodes.call(this);
  return this;
};
Document.prototype = {
  nodeType : 9,
  createElement : function (name){
    return new Element(name);
  },
  createDocumentFragment : function (nodeList){
    return new DocumentFragment(nodeList);
  },
  createTextNode : function (text){
    return new TextNode(text);
  }
};
mixin(Document.prototype, HasChildNodes.prototype);

module.exports = Document;