var exec = require("child_process").exec;

function start(){
	console.log("Request handler 'start' was called.");

	//在请求中加入阻塞，等待十秒
	function sleep(milliSeconds){
		var startTime = new Date().getTime();
		while(new Date().getTime() < startTime + milliSeconds){

		}
	}
	sleep(10000);

	return "Hello Start";

	//加入阻塞之后，我们执行start请求的之后，在执行upload的时候也被阻塞了十秒的时间。
	//这个显然是一个问题，因为Node一向是这样标榜自己的，“在Node中除了代码，所有的一切都是并行执行的”。
	//Node可以在不新增额外线程的情况下，依然可以对任务进行并行处理。   Node是单线程的，它通过事件循环来实现并行的操作
}

function start2(){
	console.log("Request handler 'start2' was called.");
	var content = "empty";

	exec("ls -lah", function (error, stdout, stderr) { 
		content = stdout;
	});

  	return content;
  	//这里输出为empty，因为Node是同步操作，而为了非阻塞，exec()使用了回调函数，回调函数作为参数传递给exec().
  	//而exec()是异步操作，即当它还没来得及回调的时候，node的同步性致使执行了exec()的下一个语句。
}

function upload(){
	console.log("Request handler 'upload' was called.");
	return "Hello Upload";
}


exports.start = start;
exports.start2 = start2;
exports.upload = upload;




