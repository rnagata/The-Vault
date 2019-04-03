'use strict';
module.exports = function() {
  let myObject = {};
  
  return {
    setValue: function(key, value){
      if (!key || !value){
        return null;
      }
      myObject.key = value;
    },
    getValue: function(key){
      if (!key){
        return null;
      }
      if (!myObject.key){
        return null;
      }
      return myObject.key;
    }
  }
};