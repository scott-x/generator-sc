var sc = require('sc-lyanc');
var fs = require('fs-extra');
exports.gen=function(files,regx,name){
   fs.pathExists('src',(err,exists)=>{
   	    var Uname = name.toLowerCase().substring(0,1).toUpperCase()+name.toLowerCase().substring(1);
   	    var Lname = name.toLowerCase();
   		if (!exists) {
   			console.log(`${chalk.red.bold('Please move to react project folder, there should be a folder named src.')}`);
   		}else{
   			files.forEach(item=>{
   				sc.run(function* (resume){
   				    var contents = yield fs.readFile(item.start, 'utf8', resume)
   				    var updates = contents.replace(regx,name)
   				    yield fs.writeFile(item.end,updates,resume)
   				    console.log(path.join(__dirname,'../'+item.end)+" is created");
   				});
   			})
   		}
   })
}