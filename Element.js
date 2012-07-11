var HasChildNodes = require("./HasChildNodes.js");
var mixin=require("./mixin.js");
var assert = require("assert");
var TextNode = require("./TextNode.js");
var utils = require("./utils.js");
var HTMLParser = require("./HTMLParser.js");
var NodeList = require("./NodeList.js");

var Element = function (name){
  assert.ok(name);
  HasChildNodes.call(this);
  this.name = name;
  this.attributes = {};
  return this;
};
Element.prototype = {
  nodeType:1,
  hasAttribute: function (attrName){
    var attr = this.attributes[attrName];
    return attr !== undefined && attr !== null;
  },
  getAttribute : function (attrName){
    return this.attributes[attrName];
  },
  setAttribute : function (attrName, attrValue){
    this.attributes[attrName] = attrValue;
  },
  removeAttribute : function (attrName){
    delete this.attributes[attrName];
  },
  get id(){
    return this.getAttribute("id") || "";
  },
  set id (id){
    this.setAttribute("id", id);
  },
  get className (){
    return this.getAttribute("class") || "";
  },
  set className (cls){
    this.setAttribute("class", cls);
  },
  get firstChild(){
    if(this.childNodes.length > 0){
      return this.childNodes[0];
    }
    return null;
  },
  get lastChild(){
    if(this.childNodes.length > 0){
      return this.childNodes[this.childNodes.length -1];
    }
    return null;
  },
  set text (text){
    this.childNodes = NodeList([]);
    this.appendChild(new TextNode(text))
  },
  get text (){
    if(this.childNodes.length !=1 || this.childNodes.item(0).nodeType != 3){
      return undefined;
    }
    return utils.nodeToHTMLString(this.childNode.item(0), 0, HTMLParser.specialElem[this.name])
  }
}
mixin(Element.prototype, HasChildNodes.prototype);

module.exports = Element;