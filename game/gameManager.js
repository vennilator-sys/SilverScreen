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
