<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-07-22 22:22:12
 * @version $Id$
 */
// mode 参数的可能的值
// mode    说明
// "r" 只读方式打开，将文件指针指向文件头。
// "r+"    读写方式打开，将文件指针指向文件头。
// "w" 写入方式打开，将文件指针指向文件头并将文件大小截为零。如果文件不存在则尝试创建之。
// "w+"    读写方式打开，将文件指针指向文件头并将文件大小截为零。如果文件不存在则尝试创建之。
// "a" 写入方式打开，将文件指针指向文件末尾。如果文件不存在则尝试创建之。
// "a+"    读写方式打开，将文件指针指向文件末尾。如果文件不存在则尝试创建之。
// "x" 
// 创建并以写入方式打开，将文件指针指向文件头。如果文件已存在，则 fopen() 调用失败并返回 FALSE，并生成一条 E_WARNING 级别的错误信息。如果文件不存在则尝试创建之。
// 这和给底层的 open(2) 系统调用指定 O_EXCL|O_CREAT 标记是等价的。
// 此选项被 PHP 4.3.2 以及以后的版本所支持，仅能用于本地文件。
// "x+"    
// 创建并以读写方式打开，将文件指针指向文件头。如果文件已存在，则 fopen() 调用失败并返回 FALSE，并生成一条 E_WARNING 级别的错误信息。如果文件不存在则尝试创建之。
// 这和给底层的 open(2) 系统调用指定 O_EXCL|O_CREAT 标记是等价的。
// 此选项被 PHP 4.3.2 以及以后的版本所支持，仅能用于本地文件。


$email=$_REQUEST['email'];
echo $email;

$myfile = fopen("emaillist.txt", "a+") or die("Unable to open file!");
fwrite($myfile,$email);
fwrite($myfile,"\r\n");
fflush($myfile);
echo fread($myfile,filesize("emaillist.txt"));
fclose($myfile);


