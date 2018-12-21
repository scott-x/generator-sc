function* test(){
	yield ['apple','pera'];
	yield console.log("console");
	console.log('just console');
	yield hello();
	yield say()
}
function hello(){
	console.log('it\'s a function console' )
	return 'aa'
}
function say(){
	console.log('it\'s a function console' )
	
}
var gen = test();
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

