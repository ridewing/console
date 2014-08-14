console
=======
###Making use of the javascript console a lot easier.

## To get started

	var console = new Ridewing.Console();

---
## Basic Javascript usage
For basic javascript usage include the file: **build/console.js** in your project.

## Typescript usage
For Typescript projects include the **src/console.ts** in your project.

---

## Methods

####.log( value )
The go-to method for basic usage

####.info( value )
Makes the content text white with a blue background. Makes use of the default console.info 

####.warn( value )
Makes the content text black with a yellow background. Makes use of the default console.warn 

####.error( value )
Makes the content text white with a red background. Makes use of the default console.error

####.divide()
Creates a handy divider for you in the console

####.setup( color, background, divider )
*This will only affect the .log() method*

Setup the console with custom style

####.clear()
Clear the console