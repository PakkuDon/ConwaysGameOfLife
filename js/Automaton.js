function Automaton(width, height) {
    // If executing in Node.js environment, include modules
    if (typeof require !== 'undefined') {
        Cell = require('../js/Cell.js');
        Patterns = require('../js/Patterns.js');
        MathExtensions = require('../js/MathExtensions.js');
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
            var xPos = MathExtensions.wrapValue(x + i, 0, width - 1);
            for (var j = -1; j <= 1; j++) {
                var yPos = MathExtensions.wrapValue(y + j, 0, height - 1);
                if (!(xPos === x && yPos === y)) {
                    neighbours.push(grid[xPos][yPos]);
                }
            }
        }
        return neighbours;
    }


    // Update cells over an area starting from given x,y to match
    // state defined in pattern
    this.spawn = function(pattern, x, y) {
        for (var i = 0; i < pattern.length; i++) {
            for (var j = 0; j < pattern[i].length; j++) {
                var xPos = MathExtensions.wrapValue(x + i, 0, width);
                var yPos = MathExtensions.wrapValue(y + j, 0, height);
                grid[xPos][yPos].setState(pattern[i][j]);
            }
        }
    }

    // Initialize model
    this.initialise(width, height);
};

if (typeof module !== 'undefined') {
    module.exports = Automaton;
}
