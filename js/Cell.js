function Cell(neighbourCells) {
    var ConwayRules = require('../js/ConwayRules.js');

    var self = this;
    var isAlive = false;
    var neighbours = typeof neighbourCells === 'undefined' 
        ? [] : neighbourCells;
    var nextState;

    this.isAlive = function() {
        return isAlive;
    }

    this.setState = function(state) {
        isAlive = state;
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
