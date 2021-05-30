//classes

export class Person {
firstName : string;
lastName : string;

//Same way all args contructor, in ts we cannot have more than 1 constructor
constructor() {
this.firstName="";
this.lastName="";
}

getFullName(){
    return this.firstName+" "+this.lastName;
}

}
var p = new Person();
p.firstName = "Ritu";
p.lastName = "Agrawal";

console.log(p.getFullName());
//Ts does inhritance , vry similiar to java