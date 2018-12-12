'use strict'
const exec = require('child_process').exec
const projectUrl = 'https://github.com/scott-x/sc-react.git'
const chalk = require('chalk');

module.exports = () => {
    const time1=new Date().getTime();
    console.log(`  ${chalk.magenta('The project is is being initialized...')}`)
    let cmdStr = `git clone `+projectUrl
    
    exec(cmdStr, (error, stdout, stderr) => {
        if (error) {
            console.log(error)
            process.exit()
        }
        const time2=new Date().getTime();
        const times=time2-time1;
        console.log(`  ${chalk.red('The initialization is finalized, and takes')} ${chalk.green(times)} ${chalk.red('ms in total.')}`)
        process.exit()
    })

}