// yong wang
// markwy@126.com
// Date: 2016.10.24
// Subject: nodejs exec
// example is from: http://nodebeginner.org/index-zh-cn.html

var http = require("http");
var url = require("url");
//var querystring = require("querystring");

function start(route, handle) {
  function onRequest(request, response) {
    //var postData ="";
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response, request);
    };
  }
  //如何定义局部变量？http是全局的。这里onRequest不是回调?
  // listen就构造了一个消息监听循环？
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}


exports.start = start;
