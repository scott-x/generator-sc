'use strict'
var inquirer = require('inquirer');
var chalk = require('chalk');
var question=
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'text',
        name: 'componentName',
        message: `${chalk.magenta('What\'s yourcomponent name?')}`,
        default:'myApp'
      },
      // {
      //   type: 'confirm',
      //   name: 'store',
      //   message: `${chalk.magenta('Would you like to add a store inside your component?')} `,
      //   default: true
      // },
      {
        type: 'rawlist',
        name: 'loadable',
        message: `${chalk.magenta('What\'s your component type, please choose one of the following:')}`,
        choices: ['common:index.js & style.js','complex: including redux','top: including redux & react-loadable'],
        default: 'common:index.js & style.js'
      }
   
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
     require('./task').run(type,answers)
  });

  exports.question=question;