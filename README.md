# mynode
nodejs execise
代码基于一个例子。
例子来自：http://nodebeginner.org/index-zh-cn.html

几月前曾经看过node，很感兴趣，最近有空，继续学习，找到这个例子。
例子设计的不错，也写得比较明白，一步一步做下来，没有什么问题。
唯一缺点是，从不用回调函数到用回调函数，两阶段间的区别没有特别突出出来。
因为例子是从简单到复杂，逐步修改程序实现的，因此适合用github来管理不同的版本。
也为了能在办公室和家里同步。

初次在本地用git不太顺利。
====================
目前是这么做的，已成功：

在github上建一个库mynode，把本地文件用github的上传功能加到mynode中。

删除本地文件，再clone到本地。
git clone https://github.com/markwy1/mynode

在执行git的当前目录下，生成一个目录mynode，里面包括远程库中的全部文件。

====================
原本的做法，没有成功：

在本地建一个新目录，取名为mynde，然后初始化：
git init

把源程序拷贝到mynode下。
修改源程序，然后加文件到索引：
git add *

接下来，提交文件：
git commit

出现错误。
