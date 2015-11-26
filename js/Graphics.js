function Graphics(canvas, foreground, background) {
    var canvas = canvas;
    var context = canvas.getContext('2d');
    var foregroundColour = foreground;
    var backgroundColour = background;

    // Draw current state on canvas
    this.draw = function(grid) {
        var cellWidth = canvas.width / grid.length;
        var cellHeight = canvas.height / grid[0].length;

        // Clear previous state
        context.fillStyle = backgroundColour;
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = foregroundColour;

        // Draw live cells
        for (var x = 0; x < grid.length; x++) {
            for (var y = 0; y < grid[x].length; y++) {
                if (grid[x][y].isAlive()) {
                    var xPos = x * cellWidth;
                    var yPos = y * cellHeight;
                    context.fillRect(xPos, yPos, cellWidth, cellHeight);
                }
            }
        }
    }

    // Setters
    this.setForeground = function(colour) {
        foregroundColour = colour;
    }

    this.setBackground = function(colour) {
        backgroundColour = colour;
    }
}
