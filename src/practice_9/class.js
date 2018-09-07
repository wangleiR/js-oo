



class Class {
    constructor(number){
        this.number = number;
        this.leader = "";
    }

    getDisplayName(){
        return "Class "+this.number;
    }

    appendMember(student){
        student.klass = this;
    }

    assignLeader(student){
        if (student.klass.number !== this.number)
            console.log("It is not one of us.");

        if (student.klass.number === this.number)
            this.leader = student;
    }



}

export default Class;
