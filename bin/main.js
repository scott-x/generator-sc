#!/usr/bin/env node
'use strict'

// process.title = 'sc';
var program = require('commander');
var chalk = require('chalk');
var inquirer = require('inquirer');


program.version(require('../package').version)
.usage('<command> [options]');


program
    .command('init')
    .description('init your react project')
    .alias('i')
    .action(() => {
        require('../command/init')()
    })

program
.command('generate')
.description('generate react component')
.alias('g')
.action(function(){
	const type=process.argv[3];
	const componentName=process.argv[4];
	//

	if (!type) {
		 console.log(`${chalk.red('Error:')}   ${chalk.red('type can\'t be null')}`);
         console.log(`${chalk.bold.green('useage:')}  ${chalk.magenta.bold('sc g [type] [component-name]')}`);
		 console.log(`${chalk.bold.green('example:')} ${chalk.magenta.bold('sc g p home')}`)
	
		}else if(type && !componentName){
		 console.log(`${chalk.red('Error:')}   ${chalk.red('component name can\'t be null')}`);
		 console.log(`${chalk.bold.green('useage:')}  ${chalk.magenta.bold('sc g [type] [component-name]')}`);
		 console.log(`${chalk.bold.green('example:')} ${chalk.magenta.bold('sc g p home')}`)
	
	   }else{
	   	//只有接受足够的参数才会执行task
          var sc = require('./task');
	      sc.run(type,componentName);
	   }    	
});

program.parse(process.argv)

if(!program.args.length){
    program.help()
}

if (process.argv[2]!=='g' && process.argv[2]!=='i') {
	console.log(`${chalk.red.bold('Error: cmd error, please use g or i instead...')}`)
}

require('./sc-generator');