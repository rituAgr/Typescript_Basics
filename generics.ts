import {Person} from './classes';
import * as _ from 'lodash';

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

var array = [1,2,3,5,6];
var reverseArray = _.reverse(array);
console.log(reverseArray);

class student extends Person{
}

class professor extends Person{
}



