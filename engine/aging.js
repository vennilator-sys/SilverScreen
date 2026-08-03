window.ageUp = function() {
    player.age++;

    let event = generateChildhoodEvent(player);
    
    if (event) {
        event.effect(player);
        
        player.history.unshift(
            `Age ${player.age}: ${event.text}`
        );
    }

    Renderer.render();
};
