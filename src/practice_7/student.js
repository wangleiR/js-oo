
import Person from "./person";

class Student extends Person{

    constructor(name,age,Class) {
        super(name,age);
        this.klass = Class;
    }

    introduce(){
        return super.introduce()+" I am a Student. I am at Class 2."
    }

}
export default Student;
