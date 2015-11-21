window.addEventListener('load', function() {
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
});
