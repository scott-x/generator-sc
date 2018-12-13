#!/usr/bin/env node
'use strict'

// process.title = 'sc';
var program = require('commander');

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
.action(function(type){
	var sc = require('./task');
    sc.run(type,name);
});

program.parse(process.argv)

if(!program.args.length){
    program.help()
}

require('./sc-generator');