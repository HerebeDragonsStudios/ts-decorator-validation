![Banner](assets/banner.png)

#### Status
![Main](https://github.com/herebedragonsstudios/ts-workspace/actions/workflows/main.yml/badge.svg)
![Docs](https://github.com/herebedragonsstudios/ts-workspace/actions/workflows/docs.yml/badge.svg)



## Typescript workspace



### Static Methods

 - info
 - all
 - debug
 - error
 - critical

### Installation

In order to use the logging package, we need to follow a list of steps presented below.

##### Step 1: Run npm install

To install as a dependency do:
```sh
$ npm install @herebedragonsstudios1/ts-logging
```

To install as a dev dependency do:
```sh
$ npm install @herebedragonsstudios1/ts-logging --save-dev
```
instead.





Simple ts template repository

### Repository Structure

```
ts-workspace
│
│   .github                 <-- Workflows folder
│   .gitignore              <-- Defines files ignored to git
│   .nmpignore              <-- Defines files ignored by npm
│   .nmprc                  <-- Defines the Npm registry for this package
│   gulpfile.js             <-- Gulp build scripts. used in the 'build' and 'build:prod' npm scripts
│   jest.config.js          <-- Tests Configuration file
│   jsdocs.json             <-- Documentation generation configuration file
│   LICENCE.md              <-- Licence disclamer
│   nodemon.json            <-- Nodemon config file (allows to live test ts files)
│   package.json
│   package-lock.json
│   README.md               <-- Readme File dynamically compiled from 'workdocs' via the 'docs' npm script
│   tsconfig.json           <-- Typescript config file. Is overriden in 'gulpfile.js' 
│
└───bin
│   │   tag_release.sh      <-- Script to help with releases
│   
└───docs
│   │   ...                 <-- Dinamically generated folder, containing the compiled documentation for this repository. generated via the 'docs' npm script
│   
└───src
│   │   ...                 <-- Source code for this repository
│   
└───tests
│   │   ...                 <-- Test sources for this repository
│   
└───workdocs                <-- Folder with all pre-compiled documentation
|    │   ...
|    │   Readme.md           <-- Entry point to the README.md   
|
└───dist
|    |  ...                 <-- Dinamically generated folder containing the bundles for distribution
|
└───lib
    |   ...                 <-- Dinamically generated folder containing the compiled code
```




### Repository Languages

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![ShellScript](https://img.shields.io/badge/Shell_Script-121011?style=for-the-badge&logo=gnu-bash&logoColor=white)




### Social

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/tiagovenceslau/)
