var a: number;
var b: boolean;
var c: string;
a=10;
b=true;
c='hello';

//Array
var d : number[];
d=[1, 4, 2, 5];
d.push(2)

//Tuple
var tup : [boolean, string] = [true, 'hen']

//function
function add (num1:number, num2:number, num3=0): number {
 return num1+num2+num3
}
add(1,3);
add(1,4,3);

//any datatype
var num11 : any
num11=10
num11=true
num11='str'

//union datatype
var name1 : boolean | string
name1 = true;
name1 = "tru";





