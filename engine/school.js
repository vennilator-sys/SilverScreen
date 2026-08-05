const School = {

    advanceYear(player) {

        const result = {

            history: []

        };

        if(player.age < 5){

            player.education.grade = null;
            player.education.gpa = null;

            return result;

        }

        player.education.grade = this.getGrade(player.age);

        console.log(player.education);

        if(player.education.gpa === null){

            player.education.gpa = 4.0;

        }

        return result;

    },

    getGrade(age){

        const grades = {

            5:"Kindergarten",

            6:"1st Grade",

            7:"2nd Grade",

            8:"3rd Grade",

            9:"4th Grade",

            10:"5th Grade",

            11:"6th Grade",

            12:"7th Grade",

            13:"8th Grade",

            14:"Freshman",

            15:"Sophomore",

            16:"Junior",

            17:"Senior",

            18:"Graduated"

        };

        return grades[age] ?? "Adult";

    }

};
