

import Person from "./person";

class Student extends Person{

    constructor(id,name,age,Class) {
        super(id,name,age);
        this.klass = Class;
    }

    introduce(){
        const msg = this.klass.leader === this? "I am Leader of Class 2." :"I am at Class 2.";
        return super.introduce()+" I am a Student. "+msg;
    }

}
export default Student;
