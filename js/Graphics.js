function Graphics(canvas) {
    var canvas = canvas;
    var context = canvas.getContext('2d');
    var backgroundColour;
    var foregroundColour;

    this.draw = function(grid) {
        var cellWidth = canvas.width / grid.length;
        var cellHeight = canvas.height / grid[0].length;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = '#000000';

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
}
