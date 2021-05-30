import {Person} from './classes';

function doTask(args: any): any {
  return args;
}

var str: string = doTask(1);
console.log(str);

//Generic to fix it any one datatype

function doGenericTask<T>(args: T): T {
return args;
}

var num = doGenericTask("ritu")
console.log(num);

class student extends Person{
}

class professor extends Person{
}



