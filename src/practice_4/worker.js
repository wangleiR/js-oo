
import Person from "./person";

class Worker extends Person{

    constructor(name,age) {
        super(name,age);
    }

    //super
    introduce(){
        return this.basic_introduce()+" I am a Worker. I have a job."
    }

}
export default Worker;

