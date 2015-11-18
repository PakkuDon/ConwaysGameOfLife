describe('Cell', function() {
    var Cell = require('../js/Cell.js');
    var neighbours;
    var cell;

    beforeEach(function() {
        neighbours = [];
        for (var i = 0; i < 8; i++) {
            neighbours.push(new Cell());
        }
        cell = new Cell();
        cell.setNeighbours(neighbours);
    });

    it('is dead by default', function() {
        expect(cell.isAlive()).toEqual(false);
    });

    it('can return a count of its live neighbours', function() {
        neighbours[0].setState(true);
        neighbours[1].setState(true);
        expect(cell.countLiveNeighbours()).toEqual(2);
    });

    it('can only be assigned a set of neighbour cells once', function() {
        // Modify existing neighbours
        neighbours[0].setState(true);
        var previousCount = cell.countLiveNeighbours();
        expect(cell.countLiveNeighbours()).toEqual(1);

        // Attempt to re-assign new neighbour set
        var arr = [
            new Cell()
        ];
        cell.setNeighbours(arr);

        // Confirm that previous neighbours remain unchanged
        expect(cell.countLiveNeighbours()).toEqual(previousCount);
    });

    // Test compliance to rules defined in Conway's Game of Life
    it('live cell dies if it has less than two live neighbours', function() {
        cell.setState(true);
        neighbours[0].setState(true);
        cell.processNextState();
        cell.update();
        expect(cell.isAlive()).toEqual(false);
    });

    it('live cell will live on if it has two or three live neighbours', function() {
        cell.setState(true);
        for (var i = 0; i < 3; i++) {
            neighbours[i].setState(true);
        }

        cell.processNextState();
        cell.update();
        expect(cell.isAlive()).toEqual(true);
    });

    it('live cell will die if it has more than three live neighbours', function() {
        cell.setState(true);
        for (var i = 0; i <= 3; i++) {
            neighbours[i].setState(true);
        }

        cell.processNextState();
        cell.update();
        expect(cell.isAlive()).toEqual(false);
    });

    it('dead cell will be revived if it has exactly three neighbours', function() {
        for (var i = 0; i < 3; i++) {
            neighbours[i].setState(true);
        }

        cell.processNextState();
        cell.update();
        expect(cell.isAlive()).toEqual(true);
    });
});
