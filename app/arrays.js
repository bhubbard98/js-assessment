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
            var i,z;
            for (i = 0, z = arr.length; i < z; i++) {
                if (arr[i] === item){
                    arr.splice(i,1);
                    i = i - 1;
                    z = z -1;
                }

            };
                    return arr;
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
        arr.splice(0,1);
        return arr;
    },

    concat : function(arr1, arr2) {
        var arr3 = arr1.concat(arr2);
        return arr3;

    },

    insert : function(arr, item, index) {
            arr.splice(index,0,item);
            return arr;

    },

    count : function(arr, item) {
            var count = 0;
            var index = arr.indexOf(item);
            while (index != -1){
                count ++;
                index = arr.indexOf(item, index + 1);
            }
            return count;
    },

    duplicates : function(arr) {
        var arr2 = [];
        for (var i = 0; i < arr.length; i++) {
            var val = arr[i];
               for (var j = i +1 ; j < arr.length; j++) {
                   if (val === arr[j] && arr2.indexOf(arr[j])===-1){
                     arr2.push(arr[i]);
                   }
               };
        };
        return arr2;

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
