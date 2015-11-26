window.addEventListener('load', function() {
    // Frequently used elements
    var txtWidth = document.querySelector('#width');
    var txtHeight = document.querySelector('#height');
    var txtFgColor = document.querySelector('#fg-color');
    var txtBgColor = document.querySelector('#bg-color');
    var lstBrush = document.querySelector('#brush');
    var btnToggleState = document.querySelector('#toggle-running');
    var rngIntervalSpeed = document.querySelector('#interval-speed');
    var canvas = document.querySelector('canvas');

    var automaton = new Automaton(200, 240);
    var graphics = new Graphics(canvas, txtFgColor.value, txtBgColor.value);

    var delay = rngIntervalSpeed.value;
    automaton.spawn(Patterns.pentadecathlon(), 40, 40);
    graphics.draw(automaton.getGrid());

    // Test draw method
    var intervalID;
    intervalID = setInterval(function() {
        update();
    }, delay);

    // Add pre-defined structures to list of available brushes
    var patterns = Object.keys(Patterns);
    for (var i = 0; i < patterns.length; i++) {
        var opt = document.createElement('option');
        opt.value = patterns[i];
        opt.innerHTML = patterns[i];
        lstBrush.appendChild(opt);
    }

    // Draw selected structure on canvas on-click
    canvas.addEventListener('click', function(e) {
        // Translate click coordinates to coordinate in automaton's grid
        var clickX = Math.round((e.x / canvas.clientWidth) 
            * automaton.getWidth());
        var clickY = Math.round((e.y / canvas.clientHeight) 
            * automaton.getHeight());

        // Spawn selected structure and redraw canvas
        // TODO: Display error message if corresponding value not found
        if (Patterns.hasOwnProperty(lstBrush.value)) {
            automaton.spawn(Patterns[lstBrush.value](), clickX, clickY);
            graphics.draw(automaton.getGrid());
        }
    });

    // Reset and set size of automaton on submit
    document.querySelector('#dimensions-form').addEventListener('submit', function(e) {
        e.preventDefault();

        var width = parseInt(txtWidth.value);
        var height = parseInt(txtHeight.value);
        
        automaton.initialise(width, height);
    });

    // Pause / Resume automaton updates
    btnToggleState.addEventListener('click', function() {
        // If not currently running, started updates and retain interval ID
        if (typeof intervalID === 'undefined') {
            intervalID = setInterval(function() {
                update();
            }, delay);
            btnToggleState.innerHTML = '\u25FC';
        }
        // Else, clear interval
        else {
            clearInterval(intervalID);
            intervalID = undefined;
            btnToggleState.innerHTML = '\u25BA';
        }
    });

    // Reset grid state
    document.querySelector('#reset').addEventListener('click', function() {
        automaton.initialise(automaton.getWidth(), automaton.getHeight());
    });

    // Set foreground/background colours and redraw
    txtFgColor.addEventListener('change', function() {
        graphics.setForeground(txtFgColor.value);
        graphics.draw(automaton.getGrid());
    });

    txtBgColor.addEventListener('change', function() {
        graphics.setBackground(txtBgColor.value);
        graphics.draw(automaton.getGrid());
    });

    // Set delay between updates
    rngIntervalSpeed.addEventListener('change', function() {
        delay = rngIntervalSpeed.value;
        if (typeof intervalID !== 'undefined') {
            clearInterval(intervalID);
            intervalID = setInterval(function() {
                update();
            }, delay);
        }
    });

    // Create automaton's next generation 
    function update() {
        automaton.update();
        graphics.draw(automaton.getGrid());
    }
});
