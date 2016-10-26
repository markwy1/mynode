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
    console.log(' ========== Response Begin =========== ')
    var postData ="";
    var pathname = url.parse(request.url).pathname;
    //var querystr = url.parse(request.url).query;
    //var queryid = querystring(request.url)["id"];
    console.log("Request for " + pathname + " received.");
    request.setEncoding("utf8");
    request.addListener("data", function(postDataChunk){
      postData += postDataChunk;
      console.log("received POST data chunk'" + postDataChunk + "'.");
    });
    request.addListener("end", function(){
      route(handle, pathname, response, postData);
    });
    //console.log(url.parse(request.url));
    //response.writeHead(200, {"Content-Type": "text/plain"});
    //console.log(handle);
    // 根据pathname，选择处理函数
    //var content = route(handle, pathname, response);
    //console.log(content);
    //response.write(content);
    //response.write('\n' + querystr);
    //response.write('\n the id is:' + queryid);
    //response.end();
    console.log('       ==== Response End ====       ')
  }
  //如何定义局部变量？http是全局的。这里onRequest不是回调?
  // listen就构造了一个消息监听循环？
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}


exports.start = start;
