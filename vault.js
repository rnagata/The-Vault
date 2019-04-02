'use strict';
module.exports = function() {
  let myObject = {};
  return {
    setValue: function(key, value){
      if (!key || !value){
        return null;
      }
      myObject.key = value;
      //Object.defineProperty(myObject, key.
    },
    getValue: function(key){
      if (key === undefined){
        return null;
      }
      //if ()
      if (!myObject.key){
        return null;
      }
      return myObject.key;
    }
  }
};