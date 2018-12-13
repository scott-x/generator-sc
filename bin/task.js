const fs = require('fs-extra');
const chalk = require('chalk');
const projectName=require('../package').name;
console.log(projectName)
exports.run = function(type,name) {
    fs.pathExists('src', (err, exists) => {
        if (!exists) {
            console.log('src folder is not defined');
        } else {
            switch (type) {
                case 'p':
                    const pageFile = './src/pages/' + name.toLowerCase() + '/index.js';
                    const styleFile = './src/pages/' + name.toLowerCase() + '/style.js' 

                    fs.pathExists(pageFile, (err, exists) => {
                        if (exists) {
                            console.log('The component exists, please try another')
                        } else {
                            fs.copy('/usr/local/lib/node_modules/'+projectName+'/templates/index.js', pageFile, err => {
                                if (err) return console.error(err);
                                console.log(pageFile + '  has been created')
                            });
                            fs.copy('/usr/local/lib/node_modules/'+projectName+'/templates/style.js', styleFile, err => {
                                if (err) return console.error(err);
                                console.log(styleFile + '  has been created')
                            });
                        }
                    });
                    break;
                case 'c':
                    const componentFile = './src/components/' + name + '/' + name + '.vue';
                    const cssFile = './src/components/' + name + '/' + name + '.less';
                    const jsxFile = './src/components/' + name + '/' + name + '.js';
                    fs.pathExists(componentFile, (err, exists) => {
                        if (exists) {
                            console.log('this file has created')
                        } else {
                            fs.copy('/usr/local/lib/node_modules/vue-xu-generate/src/template/component.vue', componentFile, err => {
                                if (err) return console.error(err);
                                console.log(componentFile + '  has created')
                            });
                            fs.copy('/usr/local/lib/node_modules/vue-xu-generate/src/template/component.less', cssFile, err => {
                                if (err) return console.error(err);
                                console.log(cssFile + '  has created')
                            });
                            fs.copy('/usr/local/lib/node_modules/vue-xu-generate/src/template/component.js', jsxFile, err => {
                                if (err) return console.error(err);
                                console.log(componentFile + '  has created')
                            })
                        }
                    });
                    break;
                default:
                    console.log(chalk.red(`ERROR: uncaught type , you should input like $ xu g page demo` ))
                    console.log()
                    console.log('  Examples:')
                    console.log()
                    console.log(chalk.gray('    # create a new page'))
                    console.log('    $ xu g page product')
                    console.log()
                    console.log(chalk.gray('    # create a new component'))
                    console.log('    $ xu g component  product')
                    console.log()
                    console.log(chalk.gray('    # create a new store'))
                    console.log('    $ xu g store  product')
                    console.log()
                    break;
            }
        }
    });
};

