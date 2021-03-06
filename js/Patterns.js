// Contains pre-defined patterns for common structures as listed on Wikipedia
// Patterns are defined as a 2D array of boolean values where 
// true represents a live cell
var Patterns = {
    // Allow users to draw individual cells
    cell : function() {
        return [[true]];
    },
    block : function() {
        return [
            [true, true],
            [true, true]
        ];
    },
    beehive : function() {
        return [
            [false, true, false],
            [true, false, true],
            [true, false, true],
            [false, true, false]
        ];
    },
    loaf : function() {
        return [
            [false, true, false, false],
            [true, false, true, false],
            [true, false, false, true],
            [false, true, true, false]
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
            [false, true],
            [true, true],
            [true, true],
            [true, false]
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
            [false, false, true, true, true, false, false, false, true, true, true, false],
            [false, false, false, false, false, false, false, false, false, false, false, false],
            [true, false, false, false, false, true, false, true, false, false, false, false, true],
            [true, false, false, false, false, true, false, true, false, false, false, false, true],
            [true, false, false, false, false, true, false, true, false, false, false, false, true],
            [false, false, true, true, true, false, false, false, true, true, true, false],
            [false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, true, true, true, false, false, false, true, true, true, false],
            [true, false, false, false, false, true, false, true, false, false, false, false, true],
            [true, false, false, false, false, true, false, true, false, false, false, false, true],
            [true, false, false, false, false, true, false, true, false, false, false, false, true],
            [false, false, false, false, false, false, false, false, false, false, false, false],
            [false, false, true, true, true, false, false, false, true, true, true, false]
        ];
    },
    pentadecathlon : function() {
        return [
            [true, true, true, true, true, true, true, true],
            [true, false, true, true, true, true, false, true],
            [true, true, true, true, true, true, true, true]
        ];
    },
    glider : function() {
        return [
            [false, true, false],
            [false, false, true],
            [true, true, true]
        ];
    },
    lightweightSpaceship : function() {
        return [
            [true, false, true, false],
            [false, false, false, true],
            [false, false, false, true],
            [true, false, false, true],
            [false, true, true, true]
        ];
    },
    rPentomino : function() {
        return [
            [false, true, false],
            [true, true, true],
            [true, false, false]
        ];
    },
    diehard : function() {
        return [
            [false, true, false],
            [false, true, true],
            [false, false, false],
            [false, false, false],
            [false, false, false],
            [false, false, true],
            [true, false, true],
            [false, false, true]
        ];
    },
    acorn : function() {
        return [
            [false, false, true],
            [true, false, true],
            [false, false, false],
            [false, true, false],
            [false, false, true],
            [false, false, true],
            [false, false, true]
        ];
    },
    gosperGliderGun : function() {
        return [
            [false, false, false, false, true, true, false, false, false],
            [false, false, false, false, true, true, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, true, true, true, false, false],
            [false, false, false, true, false, false, false, true, false],
            [false, false, true, false, false, false, false, false, true],
            [false, false, true, false, false, false, false, false, true],
            [false, false, false, false, false, true, false, false, false],
            [false, false, false, true, false, false, false, true, false],
            [false, false, false, false, true, true, true, false, false],
            [false, false, false, false, false, true, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, true, true, true, false, false, false, false],
            [false, false, true, true, true, false, false, false, false],
            [false, true, false, false, false, true, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [true, true, false, false, false, true, true, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, true, true, false, false, false, false, false],
            [false, false, true, true, false, false, false, false, false]
        ];
    }
};

if (typeof module !== 'undefined') {
    module.exports = Patterns;
}
