module.exports ={
    Document : require("./Document.js"),
    DocumentFragment : require("./DocumentFragment.js"),
    parseHtml: require("./utils.js").nodeFromHTMLString,
    printHtml: function (documentOrDocumentFragment){
      return documentOrDocumentFragment.outerHTML;
    }
}