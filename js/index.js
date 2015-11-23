window.addEventListener('load', function() {
    // Input fields
    var txtWidth = document.querySelector('#width');
    var txtHeight = document.querySelector('#height');
    var btnToggleState = document.querySelector('#toggle-running');

    var automaton = new Automaton(200, 240);
    var graphics = new Graphics(document.querySelector('canvas'));

    var delay = 100;
    automaton.spawn(Patterns.pentadecathlon(), 40, 40);
    graphics.draw(automaton.getGrid());

    // Test draw method
    var intervalID;
    intervalID = setInterval(function() {
        update();
    }, delay);

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

    // Create automaton's next generation 
    function update() {
        automaton.update();
        graphics.draw(automaton.getGrid());
    }
});
