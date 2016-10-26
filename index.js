// yong wang
// markwy@126.com
// Date: 2016.10.24
// Subject: nodejs exec, index.js
// example is from: http://nodebeginner.org/index-zh-cn.html

var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
// handle
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle)
