class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi. I am ${this.name} !`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major='Undecided') {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
       return !!this.major; 
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }

        return description;
    }
}

const me  = new Student('Shrobon Biswas', 27, 'Computer Science');
console.log(me.getGreeting());
console.log(me.getDescription());
console.log(me.hasMajor());

const someone  = new Student();
console.log(someone);