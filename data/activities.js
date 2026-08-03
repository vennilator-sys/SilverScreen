const activities = [
    {
        name: "Drama Club",
        description: "You joined your school's drama club.",
        effects: function(player) {
            player.creativity += 5;
            player.charisma += 4;
            player.actingTalent += 5;
        }
    },
    {
        name: "Sports",
        description: "You joined a sports team.",
        effects: function(player) {
            player.health += 3;
            player.discipline += 4;
            player.confidence += 4;
        }
    },
    {
        name: "Academic Club",
        description: "You joined an academic club.",
        effects: function(player) {
            player.intelligence += 5;
            player.discipline += 3;
        }
    },
    {
        name: "Gaming",
        description: "You spent more time gaming.",
        effects: function(player) {
            player.technology += 5;
            player.social += 1;
        }
    }
];

// Attach doActivity to the global window object
window.doActivity = function(player, activityName) {
    let activity = activities.find(a => a.name === activityName);

    if (activity) {
        activity.effects(player);
        player.history.unshift(activity.description);
    }
};

// Attach chooseActivity to global window object so your button onclick works
window.chooseActivity = function() {
    // Example: Automatically picks Drama Club when the Activities button is clicked
    // (You can later expand this to open a popup menu or selection list)
    window.doActivity(player, "Drama Club");
    
    // Refresh the UI to reflect stat changes and new history
    Renderer.render();
};
