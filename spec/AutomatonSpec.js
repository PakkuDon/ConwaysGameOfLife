describe('Automaton', function() {
    var Automaton = require('../js/Automaton.js');
    var Cell = require('../js/Cell.js');
    var Patterns = require('../js/Patterns.js');
    var automaton;
    var WIDTH = 100;
    var HEIGHT = 100;

    beforeEach(function() {
        automaton = new Automaton(WIDTH, HEIGHT);
    });

    it('can be created with a given width and height', function() {
        expect(automaton.width).toEqual(WIDTH);
        expect(automaton.height).toEqual(HEIGHT);
        // Check grid dimensions
        expect(automaton.getGrid().length).toEqual(WIDTH);
        expect(automaton.getGrid()[0].length).toEqual(HEIGHT);
    });

    it('can create structures from a pre-defined pattern', function() {
        automaton.spawn(Patterns.block(), 0, 0);
        var grid = automaton.getGrid();
        // Test that spawned cells are alive
        for (var x = 0; x < 2; x++) {
            for (var y = 0; y < 2; y++) {
                expect(grid[x][y].isAlive()).toEqual(true);
            }
        }
    });
});
