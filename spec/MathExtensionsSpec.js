describe('MathExtensions', function() {
    var MathExtensions = require('../js/MathExtensions.js');
    
    describe('wrapValue', function() {
        it('will return input value if value lies between min and max', function() {
            var result = MathExtensions.wrapValue(10, 5, 15);
            expect(result).toBe(10);
        });

        it('considers value to be between min and max using an interval of [min, max)', function() {
            expect(MathExtensions.wrapValue(10, 10, 15)).toBe(10);
            expect(MathExtensions.wrapValue(14, 10, 15)).toBe(14);
        });

        it('for values greater or equal to the max boundary it will return minimum plus the difference between the boundary', function() {
            expect(MathExtensions.wrapValue(7, 0, 5)).toBe(2);
            expect(MathExtensions.wrapValue(15, 10, 15)).toBe(10);
            expect(MathExtensions.wrapValue(17, 10, 15)).toBe(12);
        });

        it('for values less than the min boundary it will return max minus the difference between the boundary', function() {
            expect(MathExtensions.wrapValue(-2, 0, 5)).toBe(3);
            expect(MathExtensions.wrapValue(9, 10, 15)).toBe(14);
            expect(MathExtensions.wrapValue(7, 10, 15)).toBe(12);
        });
    });
});
