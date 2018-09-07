
import Person from "./person";

class Teacher extends Person{

    constructor(name,age,klass) {
        super(name,age);
        this.klass = klass;
    }

    introduce(){
        const str =  (!this.klass ? " No Class.":" Class 2." )  ;
        return super.introduce()+" I am a Teacher. I teach" + str;
    }

}
export default Teacher;

