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


#### Welcome Typescript!!
To handle above JS issue typescript is introduced. Typescript code get transpiled (or say compiled) to JS
via transcript compiler. The typescript compiler is node js program.
So, we get functionality of JS with less of its problems.

TypeScript -> NodeJS Compiler -> JavaScript -> NodeJS -> Run on Browser

#### Setting
1. Any IDE
2. NodeJS (It is runtime for javascript) NPM is node package manager, comes with node
3. Transcript compiler 
```
npm install transcript -g
```
'-g' does it globally for all directories in computer. Without '-g' parameter it will just do it for current directory


