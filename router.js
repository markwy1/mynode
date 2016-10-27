// yong wang
// markwy@126.com
// Date: 2016.10.24
// Subject: nodejs exec, route
// example is from: http://nodebeginner.org/index-zh-cn.html

function route(handle, pathname, response, request) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function') {
    //返回是一个函数，字符串加个括号就可以是函数了？！确实灵活。
    //为什么这里能引用到这个外部定义的函数?
    handle[pathname](response, request);
  } else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not found");
    response.end();
  }
}

exports.route = route;
