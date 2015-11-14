function Automaton(width, height) {
    var Cell = require('../js/Cell.js');

    var self = this;
    var grid;

    // Initialize values
    this.initialise = function(width, height) {
        self.width = width;
        self.height = height;
        grid = createGrid(width, height);
    }

    this.getGrid = function() {
        return grid;
    }

    // Construct default grid with given dimensions
    function createGrid(width, height) {
        var arr = [];
        for (var x = 0; x < width; x++) {
            arr.push([]);
            for (var y = 0; y < height; y++) {
                arr[x].push(new Cell());
            }
        }
        return arr;
    }

    // Initialize model
    this.initialise(width, height);
};

module.exports = Automaton;
