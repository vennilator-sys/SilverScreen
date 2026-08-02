const GameManager = {

    initialize() {

        // Create player
        GameState.player = new Person();

        // Compatibility alias (temporary)
        window.player = GameState.player;

        // Generate family
        GameState.player.family =
            createFamily(GameState.player.name);

        // Draw first frame
        Renderer.render();
    }

    

};

window.ageUp = function() {
    // Your age up logic here
    console.log("Age up clicked!");
    
    // Example: increase age and re-render
    player.age += 1;
    Renderer.render();
};

window.chooseActivity = function() {
    // Your activities menu logic here
    console.log("Activities clicked!");
};
