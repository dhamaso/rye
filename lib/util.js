Rye.define('util', function(){

    function extend (destination, source) {
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(parent, key)){
                destination[key] = source[key]
            }
        }
        return destination
    }

    function inherits (child, parent) {
        extend(child, parent)
        function Ctor () {
            this.constructor = child
        }
        Ctor.prototype = parent.prototype
        child.prototype = new Ctor()
        child.__super__ = parent.prototype
        return child
    }

    function unique (array) {
        return array.filter(function(item, idx){
            return array.indexOf(item) == idx
        })
    }

    return {
        extend   : extend
      , inherits : inherits
      , unique   : unique
      , slice    : Array.prototype.slice
      , filter   : Array.prototype.filter
    }

})