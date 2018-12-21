'use strict'
const exec = require('child_process').exec;
const fs =require('fs-extra');
const path = require('path');
const projectUrl = 'https://github.com/scott-x/sc-react.git'
const chalk = require('chalk');
module.exports = (appName) => {
    fs.
    const time1=new Date().getTime();
    console.log(`  ${chalk.cyan.bold(' The project is is being initialized...')}`)
    let cmdStr = `git clone `+projectUrl; 
    exec(cmdStr4, (error, stdout, stderr) => {
        if (error) {
            console.log(error)
            process.exit()
        }
        console.log('4')
        const time2=new Date().getTime();
        const times=time2-time1;
        console.log(`  ${chalk.cyan.bold(' The initialization is finalized, and takes')} ${chalk.green.bold(times)} ${chalk.cyan.bold('ms in total.')}`)
        console.log(`  ${chalk.red.bold(' cd sc-react && npm install')}`)
        process.exit()
    }) 
}