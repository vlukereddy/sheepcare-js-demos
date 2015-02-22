function hello(){
	console.log("hello world");
}

var Hello = {};


Hello.hello = hello;

Hello.hello();
