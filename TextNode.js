var TextNode = function (text){
  this.text = text || "";
  return this;
};
TextNode.prototype = {
  nodeType : 3,
  get data(){
    return this.text;
  },
  set data(text){
    this.text = text;
  },
  get length(){
    return this.text.length;
  },
  get nodeValue (){
    return this.text;
  },
  destroy : function (){
    this.text = null;
   // this = null;
  }
}
module.exports = TextNode;