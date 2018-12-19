 var sc = require('sc-lyanc');
 var fs = require('fs-extra');
 var path = require('path');
 var chalk = require('chalk');

//check if is in the main project folder
//define the files: start+end
var dest='aElloa';

var originalPath=[
  {start:'templates/home/index.js',end:''},
  {start:'templates/home/style.js',end:''},
],regx=/Home/g;
 
/*
 files: []
	 example: 
	 var files=[
	  {start:'templates/home/index.js',end:'src/index.js'},
	  {start:'templates/home/style.js',end:'src/style.js'},
	]
  regx : regx expression
  dest : destination file
*/
 function generatorFiles(files,regx,dest){
   fs.pathExists('src',(err,exists)=>{
   	    var Udest= dest.toLowerCase().substring(0,1).toUpperCase()+dest.toLowerCase().substring(1);
   	    var Ldest= dest.toLowerCase();

   	    //1. define the files

   	    //2. create folder Ldest
   	    
   		if (!exists) {
   			console.log(`${chalk.red.bold('Please move to react project folder, there should be a folder named src.')}`);
   		}else{
   			files.forEach(item=>{
   				sc.run(function* (resume){
   				    var contents = yield fs.readFile(item.start, 'utf8', resume)
   				    var updates = contents.replace(regx,dest)
   				    yield fs.writeFile(item.end,updates,resume)
   				    console.log(path.join(__dirname,'../'+item.end)+" is created");
   				});
   			})
   		}
   })
 }

function getFilePath(type,name,originalPath){
   var Uname= name.toLowerCase().substring(0,1).toUpperCase()+name.toLowerCase().substring(1);
   var Lname= name.toLowerCase();	
   switch(type){
   	case 'c':
   	  originalPath.forEach(item=>{
   	  	item.end='src/common/'+Lname+item.start.substring(14)
   	  })
   	  break;
   	case 'p':
   	  originalPath.forEach(item=>{
   	  	item.end='src/pages/'+Lname+item.start.substring(14)
   	  })
   }
}
getFilePath('c','scott',originalPath)
// generatorFiles(files,regx,dest)