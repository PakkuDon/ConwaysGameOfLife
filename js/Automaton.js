function Automaton(width, height) {
    if (typeof require !== 'undefined') {
        Cell = require('../js/Cell.js');
    }

    var self = this;
    var grid;

    this.getGrid = function() {
        return grid;
    }

    // Initialize values
    this.initialise = function(width, height) {
        self.width = width;
        self.height = height;
        grid = createGrid(width, height);
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

        // Assign neighbours to each cell object
        for (var x = 0; x < width; x++) {
            for (var y = 0; y < height; y++) {
                var cell = arr[x][y];
                cell.setNeighbours(getAdjacentCells(arr, x, y));
            }
        }
        return arr;
    }

    // Return list of cells adjacent to cell at x, y position
    function getAdjacentCells(grid, x, y) {
        var neighbours = [];
        for (var i = -1; i <= 1; i++) {
            var xPos = wrapValue(x + i, 0, width - 1);
            for (var j = -1; j <= 1; j++) {
                var yPos = wrapValue(y + j, 0, height - 1);
                if (!(xPos === x && yPos === y)) {
                    neighbours.push(grid[xPos][yPos]);
                }
            }
        }
        return neighbours;
    }

    // Return value between given min and max
    // If value exceeds either boundaries, return opposite boundary value
    // ie (value > max ? min : value)
    function wrapValue(value, min, max) {
        if (value >= min && value <= max) {
            return value;
        }
        else {
            return value < min ? max : min;
        }
    }

    // Initialize model
    this.initialise(width, height);
};

if (typeof module !== 'undefined') {
    module.exports = Automaton;
}
