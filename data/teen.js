const teenEvents = [

    {
        text: "You were invited to audition for the school play.",
        effect(player) {

            player.actingTalent =
                Math.min(100, player.actingTalent + 3);

            player.confidence =
                Math.min(100, player.confidence + 2);

        }
    },


    {
        text: "A teacher noticed your creativity and encouraged you to pursue it.",
        effect(player) {

            player.creativity =
                Math.min(100, player.creativity + 3);

            player.networking =
                Math.min(100, player.networking + 1);

        }
    },


    {
        text: "You spent your weekend watching classic movies and studying performances.",
        effect(player) {

            player.actingTalent =
                Math.min(100, player.actingTalent + 2);

            player.directingTalent =
                Math.min(100, player.directingTalent + 2);

        }
    },


    {
        text: "You volunteered to help film a school project.",
        effect(player) {

            player.directingTalent =
                Math.min(100, player.directingTalent + 3);

            player.networking =
                Math.min(100, player.networking + 2);

        }
    },


    {
        text: "You froze during a presentation in front of your classmates.",
        effect(player) {

            player.confidence =
                Math.max(0, player.confidence - 3);

        }
    },


    {
        text: "Your friends convinced you to try something outside your comfort zone.",
        effect(player) {

            player.confidence =
                Math.min(100, player.confidence + 3);

            player.networking =
                Math.min(100, player.networking + 2);

        }
    },


    {
        text: "You wrote a short script for fun.",
        effect(player) {

            player.writingTalent =
                Math.min(100, player.writingTalent + 3);

            player.creativity =
                Math.min(100, player.creativity + 2);

        }
    },


    {
        text: "You attended a local theater performance and became inspired.",
        effect(player) {

            player.actingTalent =
                Math.min(100, player.actingTalent + 2);

            player.creativity =
                Math.min(100, player.creativity + 2);

        }
    },


    {
        text: "You helped a classmate with their creative project.",
        effect(player) {

            player.networking =
                Math.min(100, player.networking + 2);

            player.confidence =
                Math.min(100, player.confidence + 1);

        }
    },

  
    {
    text: "You became close friends with someone at school.",
    effect(player) {

        RelationshipManager.createFriend(player);

        }
    }

    {
        text: "You lost motivation for a while and stopped practicing your craft.",
        effect(player) {

            player.discipline =
                Math.max(0, player.discipline - 3);

            player.actingTalent =
                Math.max(0, player.actingTalent - 1);

        }
    }

];


function generateTeenEvent() {

    return teenEvents[
        Math.floor(Math.random() * teenEvents.length)
    ];

}
