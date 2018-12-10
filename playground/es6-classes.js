class Person {
    constructor(name = 'Anonymous', age = 18) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi I am ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age} old`;
    }
}

const me = new Person('Rahul')
console.log(me.getGreeting());

const other = new Person('Dhoni',44)
console.log(other.getDescription());