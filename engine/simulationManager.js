const SimulationManager = {

    simulateYear() {

        const player = GameState.player;

        player.age++;

        const results = [];

        results.push(
            School.advanceYear(player)
        );

        let event;

        if (player.age <= 12) {
        
            event = generateChildhoodEvent(player);
        
        } else {
        
            event = generateTeenEvent();
        
        }

        if(event){

            event.effect(player);

            player.history.unshift(

                `Age ${player.age}: ${event.text}`

            );

        }

        Renderer.render();

    }

};
