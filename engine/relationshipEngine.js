const RelationshipManager = {


    createFriend(player) {


        const friend = new Person();


        friend.age = player.age;


        player.relationships.friends.push(friend);


        return {

            history: [

                `${friend.name} became your friend.`

            ]

        };


    }


};
