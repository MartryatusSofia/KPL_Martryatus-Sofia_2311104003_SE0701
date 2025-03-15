//Encapsulation

class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        return `My name is ${this.name} and I am ${this.age} years old`;
    }
}

//Ingeritance
class Employee extends Person {
    constructor(name,age,position){
        super(name,age);
        this.position = position;
    }
    introduce(){
        return `${super.introduce()} and I am a ${this.position}`;
    }

    introduce(){
        return`${super.introduce()} and I am a ${this.position}`;
    }
}

//Polymorphism dan Encapsulation
class Manager extends Employee{
    constructor(name, age, jobTitle, salary, bonus){
        super(name, age, jobTitle, salary);
        this.bonus = bonus;
    }

    getTotalSalary(){
        return this.salary + this.bonus;
    }

    //Polymorphism
    introduce() {
        return `${super.introduce()} I am a ${this.jobTitle}. My total salary is ${this.getTotalSalary()}.`;
    }
}

class Departement {
    constructor(name) {
        if(this.constructor === Departement) {
            throw new Error("Cannot instantiate from abstract class");
        }

        this.name = name;
    }

    getDepartementInfo() {
        throw new Error("Method 'getDepartementInfo()' must be implemented");
    }
}


class ITDepartement extends Departement {
    getDepartementInfo() {
        return `Departement ${this.name} depa rtment is working on IT projects`;
    }
}


const employee1 = new Employee("alice", 25, "Software Engineer", 5000);
console.log(employee1.introduce())

const manager1 = new Manager("bob", 30, "Manager", 10000, 5000);
console.log(manager1.introduce())

const itDepartement = new ITDepartement("IT");
console.log(itDepartement.getDepartementInfo())