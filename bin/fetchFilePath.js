exports.fetchFilePath=function(type,name,originalPath){
   var Uname= name.toLowerCase().substring(0,1).toUpperCase()+name.toLowerCase().substring(1);
   var Lname= name.toLowerCase();	
   switch(type){
   	case 'c':
   	  originalPath.forEach(item=>{
   	  	item.end='src/common/'+Lname+item.start.substring(14)
   	  })
   	  return originalPath;
   
   	case 'p':
   	  originalPath.forEach(item=>{
   	  	item.end='src/pages/'+Lname+item.start.substring(14)
   	  })
      return originalPath;
   }
}

fetchFilePath('c','scott',originalPath)