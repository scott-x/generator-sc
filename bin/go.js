const fs = require('fs-extra');
var sc = require('sc-lyanc');
var path = require('path');
var inquirer = require('inquirer');
var chalk = require('chalk');
var init = require('./init');

function getRegx(string){
    if (string.indexOf('detail')>0) {
    	return /Detail/g;
    }else if (string.indexOf('header')>0) {
    	return /Header/g;
    }else{
    	return /Footer/g
    }
}

var p,regx,checkFile,time1,time2,time3;

exports.run=function(type,name){
   var folderName = name.toLowerCase(),newTemplateName=name.substring(0,1).toUpperCase()+name.substring(1);
   fs.pathExists('src', (err, exists) => {
        if (!exists) {
            console.log(`${chalk.red.bold('Error: Please move to your react-project folder, there should be a folder called src')}`);
        } else {
            switch (type) {
            	case 'p':
                 checkFile = './src/pages/' + folderName + '/index.js';
                case 'c':
                 checkFile = './src/common/' + folderName + '/index.js';
            }
            fs.pathExists(checkFile, (err, exists) => {
                if (exists) {
                    console.log(`${chalk.red.bold('Error: The component exists, please try another')}`);
                }else{
                    inquirer
                      .prompt([
                        /* Pass your questions in here */
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
                         switch (answers.loadable){
                            case 'common:index.js & style.js':
                                p = init.initPath(1);
                               break;
                            case  'complex: including redux':
                                p = init.initPath(2);
                               break;
                           case 'top: including redux & react-loadable':
                               p = init.initPath(3);
                               break;   
                         }
                        p=init.fetchFilePath(type,name,p);
                        regx=getRegx(p[0].start);
                        gen(regx,newTemplateName);
                        time2 = new Date().getTime();
                        time3 = time2-time1;
                        console.log(`${chalk.red('It takes'+time3+' ms in total')}`);   
                        function 
                      });
                }
            })
        }    
   })
}

function gen(regx,newTemplateName){
   time1 = new Date().getTime();
   p.forEach(item=>{
	   	fs.copy(item.start,item.end)
	   	.then(() => {
	         sc.run(function* (resume){
      	   		var contents = yield fs.readFile(item.end, 'utf8', resume);
      	   		var updates = contents.replace(regx,newTemplateName);
      	   		yield fs.writeFile(item.end,updates,resume);
      	   		console.log(`${chalk.green(path.resolve(__dirname,+'../'+item.end))}`);
	         })
	   	     console.log('success!')
	   	})
	   	.catch(err => {
	   	     console.error(`${chalk.red('Something is wrong, please re-try')}`);
	   	})
   })
}

function* getTime3(){
  var time2 = yield new Date().getTime();
  yield  gen(regx,newTemplateName);
  console.log(`${chalk.red('It takes'+time3+' ms in total')}`);   
}
