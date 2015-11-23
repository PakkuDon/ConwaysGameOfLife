window.addEventListener('load', function() {
    // Input fields
    var txtWidth = document.querySelector('#width');
    var txtHeight = document.querySelector('#height');

    var automaton = new Automaton(200, 240);
    var graphics = new Graphics(document.querySelector('canvas'));

    var delay = 100;
    automaton.spawn(Patterns.pentadecathlon(), 40, 40);
    graphics.draw(automaton.getGrid());

    // Test draw method
    setInterval(function() {
        automaton.update();
        graphics.draw(automaton.getGrid());
    }, delay);

    // Reset and set size of automaton on submit
    document.querySelector('#dimensions-form').addEventListener('submit', function(e) {
        e.preventDefault();

        var width = parseInt(txtWidth.value);
        var height = parseInt(txtHeight.value);
        
        automaton.initialise(width, height);
    });

    // Reset grid state
    document.querySelector('#reset').addEventListener('click', function() {
        automaton.initialise(automaton.getWidth(), automaton.getHeight());
    });
});
