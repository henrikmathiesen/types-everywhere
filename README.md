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

For compiling we are using Grunt and the task grunt-ts, version 6.0 which are compatible with TypeScript 2.1  
https://www.npmjs.com/package/grunt-ts
