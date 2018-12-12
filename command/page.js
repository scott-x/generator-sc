'use strict'
const exec = require('child_process').exec
const projectUrl = 'https://github.com/scott-x/react-loadable.git';
const chalk = require('chalk');

module.exports = () => {
    const time1=new Date().getTime();
    console.log(`  ${chalk.magenta('正在初始化项目...')}`)
    let cmdStr = `mv ../react-loadable red1`

    exec(cmdStr, (error, stdout, stderr) => {
        if (error) {
            console.log(error)
            process.exit()
        }
        const time2=new Date().getTime();
        const times=time2-time1;
        console.log(`  ${chalk.red('项目初始化完毕，用时')} ${chalk.green(times)} ${chalk.red('毫秒')}`)
        process.exit()
    })

}