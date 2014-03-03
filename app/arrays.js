if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item)

    },

    sum : function(arr) {
        var sum = 0;
        for (var i = arr.length - 1; i >= 0; i--) {
           sum += arr[i];
        };
        return sum;
    },

    remove : function(arr, item) {
        for (var i in arr){
           if (arr[i]===item){
            arr.splice(i,1);
           }
        }

            return arr; //not sure how I go this though.
    },


    removeWithoutCopy : function(arr, item) {
            //no clue. Well I have a sort one.
            //arr.splice(i,2)??
    },

    append : function(arr, item) {
         arr.push(item);
         return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
         arr.unshift(item);
         return arr;

    },

    curtail : function(arr) {

    },

    concat : function(arr1, arr2) {

    },

    insert : function(arr, item, index) {

    },

    count : function(arr, item) {

    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
