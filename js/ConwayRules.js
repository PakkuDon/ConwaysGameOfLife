var ConwayRules = {
    // Determines whether or not a cell is alive in the next phase
    // given its current state and number of living neighbours
    isAliveInNextGeneration : function(isAlive, liveNeighbours) {
        if (isAlive) {
            if (liveNeighbours < 2 || liveNeighbours > 3) {
                return false;
            }
            return true;
        }
        else {
            if (liveNeighbours === 3) {
                return true;
            }
            return false;
        }
    }
}

module.exports = ConwayRules;
