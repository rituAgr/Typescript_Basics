### Typescript


#### Problem with Javascript
- No datatype for variable
 ```
   var a = 10
   a = 'hello'
 ```
 
- Function arguments are so relaxed or loose, throwing weird response runtime
 ```
 function add(a,b) {return a+b)
 ```
 Now call ``` add(1,2,3)``` is fine two, JS neglect 3 and return 3
 
- Loose Object
```
  Student = {'name': 'Ritu', 'role': 'dev'}
```
  can be modified for adding new parameter ```Student.foo='PPP'```

____

#### Why JavaScript?
__*Because this is what browser understand. For any dynamic client side functionality, we need JS*__

____

#### Welcome Typescript!!
To handle above JS issue typescript is introduced. Typescript code get transpiled (or say compiled) to JS
via Typescript compiler. The typescript compiler is node js program.
So, we get functionality of JS with less of its problems.

TypeScript -> NodeJS Compiler -> JavaScript -> NodeJS -> Run on Browser
____

#### Setting
1. Any IDE
2. NodeJS (It is runtime for javascript) NPM is node package manager, comes with node
3. Typescript compiler 
```
npm install Typescript -g
```
'-g' does it globally for all directories in computer. Without '-g' parameter it will just do it for current directory
4. ```tsc --init``` created tsconfig.json file. 
____

#### General commands - 
* Compiling Typescript file```tsc <Typescript fileName>```
* Running js file locally on terminal ```node <JS fileName>```
* Combining both ```tsc <Typescript fileName> && node <JS fileName>``` 
* Compiling out to new-name js file ```tsc <Typescript fileName> --out <Any js filename.js>```
* Continuous ts file watch for changes whenever file changes & saved
```tsc <Typescript fileName> --out <Any js filename.js> --watch```
* ```tsc --help```
* Typescript config file - tsconfig.json ```tsc --init ```
* Typescript install package and save into package.json ```npm install <packageName> --save```
* Installing type defination library is important for IDE hint. So it is required just for development env. This command install 
and save for development purpose the ```npm install @types/lodash --save-dev```
___

##### General concept in Typescript
* Default member visibility is public
* There is readonly access modifier which name suggest. Its value can be defined at 
time of declaration or inside constructor
* Typescript class can have only one constructor
* Shortcut way of assigning member variable via constructor as below
```
class abc {

constructor(firstName: string, lastName: string){
 }
 
}
```
* Datatype available - 
```
number
boolean
string
tuple
any (small a, remember) : if no datatype is alloted, then ts makes it any datatype
class
interface
``` 
* .ts exported files should be preferably stateless.
____


