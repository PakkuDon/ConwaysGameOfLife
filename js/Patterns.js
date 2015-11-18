// Contains pre-defined patterns for common structures as listed on Wikipedia
// Patterns are defined as a 2D array of boolean values where 
// true represents a live cell
var Patterns = {
    block : function() {
        return [
            [true, true],
            [true, true]
        ];
    },
    beehive : function() {
        return [
            [false, true, true, false],
            [true, false, false, true],
            [false, true, true, false]
        ];
    },
    loaf : function() {
        return [
            [false, true, true, false],
            [true, false, false, true],
            [false, true, false, true],
            [false, false, true, false]
        ];
    },
    boat : function() {
        return [
            [true, true, false],
            [true, false, true],
            [false, true, false]
        ];
    },
    blinker : function() {
        return [
            [true],
            [true],
            [true]
        ];
    },
    toad : function() {
        return [
            [false, true, true, true],
            [true, true, true, false]
        ];
    },
    beacon : function() {
        return [
            [true, true, false, false],
            [true, true, false, false],
            [false, false, true, true],
            [false, false, true, true]
        ];
    },
    // !-- In hindsight I probably should have stored these at ints instead
    pulsar : function() {
        return [
            [false, false, false, false, true, false, false, false, false, false, true, false, false, false, false],
            [false, false, false, false, true, false, false, false, false, false, true, false, false, false, false],
            [false, false, false, false, true, true, false, false, false, true, true, false, false, false, false],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [true, true, true, false, false, true, true, false, true, true, false, false, true, true, true],
            [false, false, true, false, true, false, true, false, true, false, true, false, true, false, false],
            [false, false, false, false, true, true, false, false, false, true, true, false, false, false, false],
            [false, false, false, false, true, true, false, false, false, true, true, false, false, false, false],
            [false, false, false, false, true, true, false, false, false, true, true, false, false, false, false],
            [false, false, true, false, true, false, true, false, true, false, true, false, true, false, false],
            [true, true, true, false, false, true, true, false, true, true, false, false, true, true, true],
            [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, false, false, true, true, false, false, false, true, true, false, false, false, false],
            [false, false, false, false, true, false, false, false, false, false, true, false, false, false, false],
            [false, false, false, false, true, false, false, false, false, false, true, false, false, false, false]
        ];
    },
    pentadecathlon : function() {
        return [
            [false, true, true, true, false],
            [true, false, false, false, true],
            [true, false, false, false, true],
            [false, true, true, true, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, true, true, true, false],
            [true, false, false, false, true],
            [true, false, false, false, true],
            [false, true, true, true, false],
        ];
    },
    glider : function() {
        return [
            [true, false, false],
            [false, true, true],
            [true, true, false]
        ];
    },
    lightweightSpaceship : function() {
        return [
            [false, true, true, true, true],
            [true, false, false, false, true],
            [false, false, false, false, true],
            [true, false, false, true, false]
        ];
    }
};

if (typeof module !== 'undefined') {
    module.exports = Patterns;
}
