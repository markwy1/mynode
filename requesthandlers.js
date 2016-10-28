// yong wang
// markwy@126.com
// Date: 2016.10.24
// Subject: nodejs exec, requireHandlers
// example is from: http://nodebeginner.org/index-zh-cn.html
//var exec = require("child_process").exec;

var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");

function start(response, postData) {
  console.log("Request handler 'start' was called.");
  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload"  enctype="multipart/form-data" method="post">'+
    '<input type="file" name="upload" multiple="multiple">' +
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();

}


function upload(response, postData) {
  console.log("Request handler 'upload' was called.");
  var form = new formidable.IncomingForm();
  console.log("about to parse");
  form.parse(request, function(error, fields, files) {
    console.log("parsing done");
    // 给上传文件硬性改名，为了演示。
    fs.renameSync(files.upload.path, "/tmp/test.png")
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("received image:<br/>");
    response.write("<img src=' /show' />")
    //response.write("You've sent: " + querystring.parse(postData).text);
    response.end();
  })
}

function show(response) {
  console.log("Request handler 'show' was called.");
  // /tmp实际执行中是服务器上的c:/tmp（直接访问服务器C盘目录不太好吧）
  // file应是读出的文件内容
  fs.readFile("/tmp/test.png", "binary", function(error, file) {
    if(error) {
      console.log("error...")
      //这里的Content-Type是文本的error串
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error + "\n");
      response.end();
    } else {
      // 不错，成功了。图显示出来了
      response.writeHead(200, {"Content-Type": "image/png"});
      response.write(file, "binary");
      response.end();
    }
  });
}

exports.start = start;
exports.upload = upload;
exports.show = show;
