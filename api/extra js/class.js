class Instructor {
    name;
    teamName;
    location;
    time;

    constructor(name, teamName, location, time){
        this.name = name;
        this.teamName = teamName;
        this.location = location;
        this.time = time;
    }

    createQuiz(time, module) {
        console.log(`The quiz will be public for ${module} this module at ${time} this time.`);
    }

    livingLocation(location, time) {
        console.log(`You are living at ${location} place and you office time was ${time}.`);
    }
}

const instructor = new Instructor('Francis Rudra D Cruze', 'Green Nation', 'Dhaka', '9.30');

instructor.createQuiz('9.30', 19);