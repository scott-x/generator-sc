module.exports={
	initPath: function(type){
		switch(type){
	       	case 1:
	       		 return [
	       		 	 {start:'templates/footer/index.js',end:''},
	       	         {start:'templates/footer/style.js',end:''}
	       		 ]
	       	case 2:
	       	     return [
	       		 	 {start:'templates/header/index.js',end:''},
	       	         {start:'templates/header/style.js',end:''},
	       	         {start:'templates/header/store/actionCreators.js',end:''},
	       	         {start:'templates/header/store/actionType.js',end:''},
	       	         {start:'templates/header/store/index.js',end:''},
	       	         {start:'templates/header/store/reducer.js',end:''},
	       		 ]
	       	case 3:
	            	  return [
	       		 	 {start:'templates/detail/index.js',end:''},
	       	         {start:'templates/detail/style.js',end:''},
	       	         {start:'templates/detail/store/actionCreators.js',end:''},
	       	         {start:'templates/detail/store/actionType.js',end:''},
	       	         {start:'templates/detail/store/index.js',end:''},
	       	         {start:'templates/detail/store/reducer.js',end:''},
	       	         {start:'templates/detail/loadable.js',end:''},
	       		 ]
	       	default:
	       	   return [];
	       	   break;	 
		}
    },
    fetchFilePath: function(type,name,originalPath) {
		   var Uname= name.toLowerCase().substring(0,1).toUpperCase()+name.toLowerCase().substring(1);
		   var Lname= name.toLowerCase();	
		   switch(type){
		   	case 'c':
		   	  originalPath.forEach(item=>{
		   	  	item.end='src/common/'+Lname+item.start.substring(16);
		   	  })
		   	  return originalPath;
		   
		   	case 'p':
		   	  originalPath.forEach(item=>{
		   	  	item.end='src/pages/'+Lname+item.start.substring(16);
		   	  })
		      return originalPath;
		   }
    }
}