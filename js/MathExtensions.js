var MathExtensions = {
    // Return value between given min and max
    // If value exceeds either boundaries, return opposite boundary value
    // ie (value > max ? min : value)
    wrapValue : function(value, min, max) {
        if (value >= min && value < max) {
            return value;
        }
        else {
            if (value >= max) {
                return min + (value - max);
            }
            return max - Math.abs(min - value);
        }
    }
};

if (typeof module !== 'undefined') {
    module.exports = MathExtensions;
}
