class Person {
    constructor(location, name = 'anonymous', age = 0) {
        this.name = name || 'test'
        this.age = age || 0
        this.location = location
    }
    getGreeting() {
        return `Hi i am ${this.name} !`
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    };
};

//sub class

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    };
    hasMajor() {
        return !!this.major;
    };
    // overwriting the parent class

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor) {
            // description = description + `Their major ${this.major}.`

            description += `Their major is ${this.major}`
        } else {
            return description
        };
    };
};
r

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    };
    getGreeting() {
        let greeting = super.getGreeting();

        if (this.homeLocation) {
            greeting += `I am visiting from ${this.homeLocation}`;
        } else {
            return greeting;
        };
    };
};


const me = new Person("max innocent", 1.3, 'computer science');
console.log(me.getGreeting());

const other = new Person();
console.log(other.getGreeting());