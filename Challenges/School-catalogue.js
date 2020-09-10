class School {
    constructor(name , level ,numberOfStudents){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    static pickSubstituteTeacher(subTeachers){
       const random = Math.floor(Math.random() * subTeachers.length);
    return subTeachers[random];
    }
    get name(){
        return this._name;
    }
    get level(){
        return this._level;
    }
    get numberOfStudents(){
        return this._numberOfStudents;
    }
    quickfacts(){
        return  `${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`
    }
    set numberOfStudents(num){
    typeof num == 'string' ? console.log('Invalid input: numberOfStudents must be set to a Number.') : this.numberOfStudents == num
    }
 
}

class Primary extends School {
    constructor(name ,numberOfStudents){
    super(name ,numberOfStudents);
    this._pickUpPolicy = '';
    this._level = 'Primary';
    }
    get pickUpPolicy(){
        return this._pickUpPolicy
    }
}

class Middle extends School {
    constructor(name ,numberOfStudents){
    super(name ,numberOfStudents);
    this._level = 'Middle' 
    }
}
class High extends School {
    constructor(name ,level ,numberOfStudents){
    super(name ,level ,numberOfStudents);
    this._sportsTeam = '';
    }
    get _sportsTeam(){
        return this._sportsTeam
    }
}

// instances
const test1 = new Primary('aladin',123);
const teachers = ['din','john','jane']
console.log(School.pickSubstituteTeacher(teachers))
console.log(test1.level)



