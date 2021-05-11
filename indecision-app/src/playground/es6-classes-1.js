//Car
//make
//model
//vin
// getDescrition
 
class Person{
    constructor(name="Anonymous",age=0){
        this.name=name;
        this.age=age;
    }
    getGretting(){
        return `hello ${this.name}`
    }
    getDescription(){
        return `${this.name} is ${this.age} years old!.`
    }
}

class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major=major;
    }
    hasMajor(){
        return !!this.major
    }
    getDescription(){
        let description=super.getDescription();
        if(this.hasMajor()){
            description +=`their major is ${this.major}`
        }
        return description
    }
}
class Traveler extends Person{
    constructor(name,homeLocation){
        super(name)
        this.homeLocation=homeLocation

    }
    hasHome(){
        return !!this.homeLocation
    }
    getGretting(){
        let greet=super.getGretting();
        if(this.hasHome()){
            greet+=`i am visiting from ${this.homeLocation}`
        }
        return greet
    }
}
const me=new Student("Naimul",16,'computer science')
console.log(me.getDescription())
const travel=new Traveler("Naimul",'Bangladesh')
console.log(travel.getGretting())
