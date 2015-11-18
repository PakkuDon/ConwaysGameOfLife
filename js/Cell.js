function Cell() {
    var ConwayRules = require('../js/ConwayRules.js');

    var self = this;
    var isAlive = false;
    var neighbours;
    var nextState;

    this.isAlive = function() {
        return isAlive;
    }

    this.setState = function(state) {
        isAlive = state;
    }

    // Assigns array of cells neighbouring this cell
    // Can only be invoked once. Future calls will do nothing
    this.setNeighbours = function(neighbourCells) {
        // Override function so it can't be executed again
        self.setNeighbours = function() {};
        neighbours = neighbourCells;
    }
    
    // Determine cell's state in next generation based on current state
    this.processNextState = function() {
        nextState = ConwayRules.isAliveInNextGeneration(
            isAlive, self.countLiveNeighbours());
    }

    // Return number of living neighbours
    this.countLiveNeighbours = function() {
        var count = 0;
        for (var i = 0; i < neighbours.length; i++) {
            if (neighbours[i].isAlive()) {
                count++;
            }
        }
        return count;
    }

    // Set current state to next state determined by processNextState()
    this.update = function() {
        isAlive = nextState;
    }
}

module.exports = Cell;
