#!/usr/bin/env node
'use strict'
const program = require('commander')
program
    .version(require('../package').version )

program
    .command('init')
    .description('init your react project')
    .alias('i')
    .action(() => {
        require('../command/init')()
    })

program
    .command('page')
    .description('create a component inside the src/pages folder')
    .alias('p')
    .action(() => {
        require('../command/page')()
    })

program
    .command('common')
    .description('create a component inside the src/common folder')
    .alias('c')
    .action(() => {
        require('../command/init')()
    })
            

program.parse(process.argv)

if(!program.args.length){
    program.help()
}
