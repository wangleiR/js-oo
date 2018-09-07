
class Class {
    constructor(number){
        this.number = number;
        this.leader = "";
        this.assignLeaderTeachers = [];
        this.joinTeachers = [];
    }

    registerAssignLeaderListener(teacher){
        this.assignLeaderTeachers.push(teacher);
    }

    registerJoinListener(teacher){
        this.joinTeachers.push(teacher);
    }

    getDisplayName(){
        return "Class "+this.number;
    }

    appendMember(student){
        student.klass = this;
        this.joinTeachers.forEach(teacher => teacher.notifyMember(student, this));
    }

    assignLeader(student){
        if (student.klass !== this)
            console.log("It is not one of us.");

        else if (student.klass.number === this.number){
            this.leader = student;
            this.assignLeaderTeachers.forEach(teacher => teacher.notifyLeader(student, this));
        }

    }



}

export default Class;
