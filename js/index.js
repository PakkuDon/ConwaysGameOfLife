window.addEventListener('load', function() {
    var automaton = new Automaton(200, 200);
    var graphics = new Graphics(document.querySelector('canvas'));

    // Test draw method
    automaton.spawn(Patterns.block(), 4, 4);
    automaton.update();
    graphics.draw(automaton.getGrid());
});
