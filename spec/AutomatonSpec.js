describe('Automaton', function() {
    var Automaton = require('../js/Automaton.js');
    var Cell = require('../js/Cell.js');
    var automaton;

    beforeEach(function() {
        automaton = new Automaton(10, 10);
    });

    it('can be created with a given width and height', function() {
        expect(automaton.width).toEqual(10);
        expect(automaton.height).toEqual(10);
        // Check grid dimensions
        expect(automaton.getGrid().length).toEqual(10);
        expect(automaton.getGrid()[0].length).toEqual(10);
    });
});
