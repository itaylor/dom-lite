var _ = require("underscore");
var assert = require("assert");
var mixin=require("./mixin.js");
var MyMixer = function (){
  this.isCool = true;
  return this;
};
MyMixer.prototype.checkCool = function (){
  return this.isCool;
};
MyMixer.prototype.__defineGetter__("test", function(){
  return "awesome";
});
MyMixer.prototype.__defineSetter__("test", function(text){
 //do nothing
});

var MyClass = function (){
  this.isBoring = true;
  MyMixer.call(this);
  return this;
};

MyClass.prototype.checkBoring = function (){
  return this.isBoring;
};
mixin(MyClass.prototype, MyMixer.prototype);

var cls = new MyClass();

assert.ok(cls.checkBoring());
assert.ok(cls.checkCool());
assert.ok(cls.isCool);
assert.ok(cls.isBoring);
assert.equal(cls.test, "awesome");
cls.test = "foo";
assert.equal(cls.test, "awesome");