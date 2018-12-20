const fs = require('fs-extra');
var sc = require('sc-lyanc');
var generatorFile = require('./generatorFile');
var init = require('./init');

var files = init.initPath(3), name='haha';
var newTemplateName=name.substring(0,1).toUpperCase()+name.substring(1);
function getRegx(string){
    if (string.indexOf('detail')>0) {
    	return /Detail/g;
    }else if (string.indexOf('header')>0) {
    	return /Header/g;
    }else{
    	return /Home/g
    }
}
var p;
var regx=getRegx(p[0].start);

exports.run=function(type,name){
   fs.pathExists('src', (err, exists) => {
        switch (type) {
        	case 'p':
              = init.fetchFilePath(type,'hahx',files);
        }
   })
}
p.forEach(item=>{
	fs.copy(item.start,item.end)
	.then(() => {
      sc.run(function* (resume){
		var contents = yield fs.readFile(item.end, 'utf8', resume);
		var updates = contents.replace(regx,newTemplateName);
		yield fs.writeFile(item.end,updates,resume)
		console.log("done");
      })
	  console.log('success!')
	})
	.catch(err => {
	  console.error(err)
	})
})

function run(type,name) {
    fs.pathExists('src', (err, exists) => {
        if (!exists) {
            console.log('src folder is not defined');
        } else {
            switch (type) {
                case 'p':
                    var pageFile = './src/pages/' + name + '/index.js';
                    var styleFile = './src/pages/' + name + '/style.js'; 
                    fs.pathExists(pageFile, (err, exists) => {
                        if (exists) {
                            console.log(`${chalk.red.bold('Error: The component exists, please try another')}`);
                        } else {
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
                                        fs.copy(basePath+'/home/index.js', pageFile, err => {
                                            if (err) return console.error(err);
                                            console.log(path.join(basePath,pageFile))
                                        });
                                        fs.copy(basePath+'/home/style.js', styleFile, err => {
                                            if (err) return console.error(err);
                                            console.log(path.join(basePath,styleFile))
                                        });
                                    case  'complex: including redux':
                                          
                                 }
                                 
                              });
                        }
                    });
                    break;
                case 'c':
                       pageFile = './src/common/' + name + '/index.js';
                       styleFile = './src/common/' + name + '/style.js'; 
                    fs.pathExists(pageFile, (err, exists) => {
                        if (exists) {
                            console.log('The component exists, please try another')
                        } else {
                            fs.copy(basePath+'/home/index.js', pageFile, err => {
                                if (err) return console.error(err);
                                console.log(pageFile + '  has been created')
                            });
                            fs.copy(basePath+'/home/style.js', styleFile, err => {
                                if (err) return console.error(err);
                                console.log(styleFile + '  has been created')
                            });
                        }
                    });
                    break;
                default:
                    console.log(chalk.red(`ERROR: uncaught type , you should input like $ sc g p demo` ))
                    console.log()
                    console.log('  Examples:')
                    console.log()
                    console.log(chalk.gray('    # create a new page inside the pages folder'))
                    console.log('    $ sc g p product')
                    console.log()
                    console.log(chalk.gray('    # create a new component inside the common folder'))
                    console.log('    $ sc g c product')
                    break;
            }
        }
    });
};

