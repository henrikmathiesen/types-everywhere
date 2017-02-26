# types-everywhere

There are a few ways to get TypeScript typings for 3party libraries.  
- tsd, package manager for DefinitelyTyped, deprecated  
- typings, package manager, includes DefinitelyTyped  
- DefinitelyTyped as npm packages, example: https://www.npmjs.com/package/definitely-typed-angular  
- @types, as npm packages, from Microsoft, https://www.npmjs.com/~types

The wind is blowing in the direction of bullet point 4, so we will explor it in this repo.  
http://stackoverflow.com/questions/40592539/npm-types-or-typings-or-type-or-what  
http://stackoverflow.com/questions/37548066/typescript-typings-in-npm-types-org-packages

It seems TypeScript 2.0 is required.

For compiling we are using Grunt and the task grunt-ts, version 6.0 which are compatible with TypeScript 2.1.  
https://www.npmjs.com/package/grunt-ts

VSCode comes bundled with TypeScript, currently version 2.1.6.  
I however like to keep all dependencies local to the project, so Iam installing typescript (2.2.1) locally.  
VSCode picks up on the installation and I can choose which of the compiler to use, i choose the local one.

The above paragraph only applies to VSCodes interpretation of TypeScript written in the editor, we still use grunt-ts for compiling though.  
It uses its own compiler and that should match the one VSCode is using for looking at the code.  
grunt-ts version <6 comes bundled with a ts compiler, but version >6 does not.  
Hopefully grunt-ts will use my local version (2.2.1) to compile the code -- it does "Using tsc v2.2.1".

See grunt file for comments about modules

TYPES

We have downloaded types for jQuery as a first test (using @types), sadly the latest types is behind latest version of jQuery.  
I do however think that it is easier handling versions with NPM and package.json than using Typings.

It works, jQuery is recognised by VSCode, without doing anything more than NPM install the types, no references needed.  
If running a TypeScript compiler from the command line or from Grunt (like we do), and we specify options there, tsconfig is not really needed.  
https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

