function Cell() {
    if (typeof require !== 'undefined') {
        ConwayRules = require('../js/ConwayRules.js');
    }

    this.alive = false;
    this.neighbours;
    this.nextState;

    // Assigns array of cells neighbouring this cell
    // Can only be invoked once. Future calls will do nothing
    this.setNeighbours = function(neighbourCells) {
        // Override function so it can't be executed again
        this.setNeighbours = function() {};
        this.neighbours = neighbourCells;
    }
}

Cell.prototype.isAlive = function() {
    return this.alive;
}

Cell.prototype.setState = function(state) {
    this.alive = state;
}


// Determine cell's state in next generation based on current state
Cell.prototype.processNextState = function() {
    this.nextState = ConwayRules.isAliveInNextGeneration(
        this.alive, this.countLiveNeighbours());
}

// Return number of living neighbours
Cell.prototype.countLiveNeighbours = function() {
    var count = 0;
    for (var i = 0; i < this.neighbours.length; i++) {
        if (this.neighbours[i].isAlive()) {
            count++;
        }
    }
    return count;
}

// Set current state to next state determined by processNextState()
Cell.prototype.update = function() {
    this.alive = this.nextState;
}

if (typeof module !== 'undefined') {
    module.exports = Cell;
}
