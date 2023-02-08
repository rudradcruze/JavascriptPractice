class TeamMember {
    name;
    location;
    mobile;

    constructor(name, location, mobile) {
        this.name = name;
        this.location = location;
        this.mobile = mobile;
    }
}

class WebMember extends TeamMember {
    technology;

    constructor(name, location, mobile, technology) {
        super(name, location, mobile);
        this.technology = technology;
    }
}

class JobDepartment extends TeamMember {
    region;

    constructor(name, location, mobile, region) {
        super(name, location, mobile);
        this.region = region;
    }
}

const webMember = new WebMember('Argho J Gomes', 'Dhaka', '01870179066', 'HTML');
const jobMember = new JobDepartment('Francis Rudra D Cruze', 'Nowyoua Khali', '01870179066', 'Bangladesh')

console.log(webMember);
console.log(jobMember);