var _ = require("underscore");
var utils = require("./utils.js");
var NodeList = require("./NodeList.js");

/* a Mixin for node appending, used by many node types */
var HasChildNodes = function (){
  this.childNodes = NodeList([]);
  return this;
};
HasChildNodes.prototype = {
  __hasNoParentNodeRefs : true,
  appendChild : function (node){
    this.childNodes.push(node);
    return node;
  },
  hasChildNodes : function (){
    return this.childNodes.length > 0;
  },
  removeChild : function (node){
    var childNodesLen = this.childNodes.length;
    this.childNodes = NodeList(_.reject(this.childNodes, function (n){return n === node;}));
    if(childNodesLen == this.childNodes.length){
      return null;
    }
    return node;
  },
  insertBefore : function (newchild, refchild){
    var idx = _.indexOf(this.childNodes, refchild);
    if(idx > -1){
      this.childNodes.splice(idx, 0, newchild);
      return newchild;
    }
    return null;
  },
  replaceChild : function (newNode, oldNode){
    var idx = _.indexOf(this.childNodes, oldNode);
    if(idx > -1){
      this.childNodes.splice(idx, 1, newNode);
      return oldNode;
    }
    return null;
  },
  get innerHTML(){
    return utils.nodeListToHTMLString(this.childNodes);
  },
  get outerHTML(){
    return utils.nodeToHTMLString(this);
  },
  set innerHTML(html){
    var docFrag = utils.nodeFromHTMLString(html);
    if(docFrag && docFrag.childNodes){
      this.childNodes = docFrag.childNodes;
    }else{
      this.childNodes = NodeList();
    }
  }
}
module.exports = HasChildNodes;