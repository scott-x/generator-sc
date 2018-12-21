'use strict'
const exec = require('child_process').exec;
const fs =require('fs-extra');
const path = require('path');
const chalk = require('chalk');

module.exports = (appName) => {
    fs.pathExists(appName, (err, exists)=>{
        if (exists) {
           console.log(`${chalk.red.bold('   Error: The project')} ${chalk.cyan.bold(appName)} ${chalk.red.bold('exists, please try another...')}`);
        }else{
           //here must be absolute path, and the later must be relative 
           fs.copy(path.resolve(__dirname,'../templates/myApp'), './'+appName, err => {
           if (err) return console.error(err)
               const time1=new Date().getTime();
               console.log(`  ${chalk.cyan.bold(' The project is is being initialized...')}`);
               //remove .npmignore and change to .gitignore
               const destination='./'+appName+'/.gitignore';
               const startPath=path.resolve(__dirname,'../templates/gitignore');
               fs.copy(startPath,destination,err=>{
                 if (err) {
                   console.log(err);
                 }else{
                    const time2=new Date().getTime();
                    const times=time2-time1;
                    console.log(`  ${chalk.cyan.bold(' The initialization is finalized, and takes')} ${chalk.green.bold(times)} ${chalk.cyan.bold('ms in total.')}`);
                    console.log(`  ${chalk.red.bold(' cd '+appName+' && yarn install')}`);
                 }
               })
           }) 
        }
    })
}