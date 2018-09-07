

import Person from "./person";

class Teacher extends Person{

    constructor(id,name,age,klass) {
        super(id,name,age);
        this.klass = klass;
    }

    introduce(){
        const str =  (!this.klass? " No Class.":" Class 2." )  ;
        return super.introduce()+" I am a Teacher. I teach" + str;
    }

    introduceWith(student){
        const str = student.klass === this.klass ? "teach "+student.name : "don't teach "+student.name;
        return super.introduce()+" I am a Teacher. I " + str+".";
    }

}
export default Teacher;

