const teenEvents = [

    {
        text: "You were invited to audition for the school play.",
        effect(player) {
            player.actingTalent = Math.min(100, player.actingTalent + 3);
            player.confidence = Math.min(100, player.confidence + 2);
        }
    },

    {
        text: "A teacher praised your creativity in class.",
        effect(player) {
            player.creativity = Math.min(100, player.creativity + 2);
        }
    },

    {
        text: "You spent the weekend watching classic films.",
        effect(player) {
            player.directingTalent = Math.min(100, player.directingTalent + 2);
            player.writingTalent = Math.min(100, player.writingTalent + 1);
        }
    },

    {
        text: "You embarrassed yourself in front of your classmates.",
        effect(player) {
            player.confidence = Math.max(0, player.confidence - 3);
        }
    }

];

function generateTeenEvent() {

    return teenEvents[
        Math.floor(Math.random() * teenEvents.length)
    ];

}
