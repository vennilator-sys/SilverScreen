const SimulationManager = {

    simulateYear() {

        const player = GameState.player;

        player.age++;

        const schoolResult = School.advanceYear(player);

        let event = generateChildhoodEvent(player);

        if(event){

            event.effect(player);

            player.history.unshift(

                `Age ${player.age}: ${event.text}`

            );

        }

        Renderer.render();

    }

};
