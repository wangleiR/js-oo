



import Person from "./person";

class Teacher extends Person {
    constructor(id, name, age, klasses){
        super(id, name, age);
        this.klasses = klasses;
    }

    introduce(){
        var className = `No Class`;
        if(this.klasses && this.klasses.length > 0){
            className = `Class ${this.klasses.map(klass => klass.number).join(", ")}`;
        }
        return super.introduce() + ` I am a Teacher. I teach ${className}.`;
    }

    isTeaching(student){
        return this.klasses.includes(student.klass);
    }
}

export default Teacher;

