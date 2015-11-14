function Cell() {
    var isAlive = false;

    this.isAlive = function() {
        return isAlive;
    }

    this.setState = function(state) {
        isAlive = state;
    }
}

module.exports = Cell;
