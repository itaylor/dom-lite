var _ = require("underscore");
var HTMLParser = require("./HTMLParser.js");

var nodeFromHTMLString = function (html){
  var Element = require("./Element.js");
  var TextNode = require("./TextNode.js");
  var DocumentFragment = require("./DocumentFragment.js");

  var elems = [];
  var topDocFrag = new DocumentFragment();
  var curParentNode = topDocFrag;
  
  HTMLParser( html, {
    start: function( tagName, attrs, unary ) {
      var elem = new Element( tagName );
      for ( var attr in attrs ){
        elem.setAttribute( attrs[ attr ].name, attrs[ attr ].value );
      }
      if ( curParentNode && curParentNode.appendChild ){
        curParentNode.appendChild( elem );
      } 
      if ( !unary ) {
        elems.push( elem );
        curParentNode = elem;
      }
    },
    end: function( tag ) {
      elems.length -= 1;
      curParentNode = (elems[ elems.length - 1 ]) || topDocFrag;
    },
    chars: function( text ) {
      curParentNode.appendChild( new TextNode( text ) );
    },
    comment: function( text ) {
      //do nothing?
    }
  });
  return topDocFrag;
};

var attributesToText = function (attrs){
  var attrText = "";
  _.each(attrs, function (val, key){
    val = val || "";
    val = val.toString();
    val = val.replace(">", "&gt;");
    var quote = "\"";
    if(val.indexOf("\"") != -1){
      quote = "'";
    }
    attrText += " " + key + "=" + quote + val + quote;
  });
  return attrText;
};

var pad = function (depth){
  var space = "";
  for(var i = 0; i < depth; i++){
    space += "  ";
  }
  return space;
};



var nodeListToHTMLString = function (nodeList, depth, noEscape){
  depth = depth || 0;
  var str = "";
  _.each(nodeList, function (node, i){
    str += nodeToHTMLString(node, depth);
  });
  return str;
};


var ampRegex = /&/g;
var ltRegex = /</g;
var gtRegex = />/g;
var newLineRegex = /\n/g;

var htmlEscape = function (text){
  return (text || "").replace(ampRegex, "&amp;").replace(ltRegex, "&lt;").replace(gtRegex, "&gt;");
}

var last = 0;
var nodeToHTMLString = function (node, depth, noEscape){
  depth = depth || 0;
  var result;
  if(node.nodeType == 1){
    result = "\n" + pad(depth) + "<"+ node.name + attributesToText(node.attributes) + ">"; 
    if(HTMLParser.specialElems[node.name]){
      result += nodeListToHTMLString(node.childNodes, depth +1, true) + 
      "</"+node.name+">";
    }else if(HTMLParser.emptyElems[node.name]){
      //do nothing.
    }else{
      result += nodeListToHTMLString(node.childNodes, depth +1, false);
      if(last != 3){
        result +="\n" + pad(depth);
      }
      result += "</"+node.name+ ">";
    }
    last = 1;
  }else if (node.nodeType == 3 ){
    var text = noEscape ? node.data : htmlEscape(node.data);
    var padding = "\n" + pad(depth);
    result = text.replace(newLineRegex, padding);
    last = 3;
  }else if (node.nodeType == 11 || node.nodeType == 9){
    result = nodeListToHTMLString(node.childNodes, depth, false);
    //Document or DocumentFragment
  }
  return result;
};

module.exports.nodeListToHTMLString = function (nodeList){
  last = 0;
  return nodeListToHTMLString(nodeList);
};
module.exports.nodeToHTMLString = function (node){
  last = 0;
  return nodeToHTMLString(node);
};
module.exports.nodeFromHTMLString = nodeFromHTMLString;
  