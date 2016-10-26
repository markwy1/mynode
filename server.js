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
    // 鏍规嵁pathname锛岄€夋嫨澶勭悊鍑芥暟
    //var content = route(handle, pathname, response);
    //console.log(content);
    //response.write(content);
    //response.write('\n' + querystr);
    //response.write('\n the id is:' + queryid);
    //response.end();
    console.log('       ==== Response End ====       ')
  }
  //濡備綍瀹氫箟灞€閮ㄥ彉閲忥紵http鏄叏灞€鐨勩€傝繖閲宱nRequest涓嶆槸鍥炶皟?
  // listen灏辨瀯閫犱簡涓€涓秷鎭洃鍚惊鐜紵
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}


exports.start = start;
