class Person {

    constructor(name = generateName()) {

        this.name = name;

        this.age = 0;

        this.location =
            locations[Math.floor(Math.random() * locations.length)];

        this.money = 5000;

        this.education = {

            grade: null,
        
            gpa: null,
        
            club: null,
        
            graduated: false
        
        };

        this.health = 100;

        this.looks = randomStat();

        this.intelligence = randomStat();

        this.charisma = randomStat();

        this.creativity = randomStat();

        this.discipline = randomStat();

        this.actingTalent = randomStat();

        this.directingTalent = randomStat();

        this.writingTalent = randomStat();

        this.confidence = randomStat();

        this.networking = randomStat();

        this.history = [];

        this.family = {};
    }

}
