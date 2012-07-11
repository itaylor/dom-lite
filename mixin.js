/** Just like _.extend, but treats setters and getters like functions instead of values 
  Usage:
  mixin(MyDestObj.prototype, MyMixin.prototype);
*/

var _ = require("underscore");
var mixin = function(obj) {
  _.each(Array.prototype.slice.call(arguments, 1), function(source) {
    for (var prop in source) {
      var getter = source.__lookupGetter__(prop);
      var setter = source.__lookupSetter__(prop);
      if(getter || setter){
        if(getter){
          obj.__defineGetter__(prop, getter);
        }
        if (setter){
          obj.__defineSetter__(prop, setter);
        }
      }else if (source[prop] !== void 0){
        obj[prop] = source[prop];
      }
      
    }
  });
  return obj;
};
module.exports = mixin;