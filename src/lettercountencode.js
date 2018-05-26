function getLetterCountEncode(s) {
    if (!Array.prototype.last){
        Array.prototype.last = function(){
            return this[this.length - 1];
        };
    }
    
    return Array.prototype.map.call(s, function(x, i, arr) { 
      return {key: x, val: ((i == 0) || (x != arr[i-1]) ? 0 : 1), pos: i};
    }).
    map(function(x, i, arr){ return {key: x.key, val: x.val, pos: x.val <= 0 ? i : arr.filter(xx => (xx.val==0) && (xx.pos < i)).last().pos};}).
    reduce(function(prevVal, elem, index, array) { 
        return prevVal + 
        (elem.val == 0 ? elem.key : ((index == array.length - 1) || (array[index+1].val == 0) ? index - elem.pos + 1 : ""));}, "");
}