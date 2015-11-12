describe('Conway Rules', function() {
    var ConwayRules = require('../js/ConwayRules.js');

    describe('when cell is alive', function() {
        it('will die if it has less than two live neighbours', function() {
            expect(ConwayRules.isAliveInNextGeneration(true, 1)).toEqual(false);
        });
        it('will stay alive if it has two or three live neighbours', function() {
            expect(ConwayRules.isAliveInNextGeneration(true, 2)).toEqual(true);
        });
        it('will die if it has more than three live neighbours', function() {
            expect(ConwayRules.isAliveInNextGeneration(true, 4)).toEqual(false);
        });
    });

    describe('when cell is dead', function() {
        it('will become live if it has three live neighbours', function() {
            expect(ConwayRules.isAliveInNextGeneration(false, 3)).toEqual(true);
        });
    });
});
