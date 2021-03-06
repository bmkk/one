// javascript数组详解
// 一、数组的定义
// js的数组是无类型的，数组元素可以是任意类型，同一个数组中的不同元素可能是对象或数组。
// 数组是值的有序集合，每个值叫做一个元素，而每个元素在数组中有一个位置，以数字表示，称为索引，数组的索引从第一位的位置以0开始计算。
// 数组元素的索引不一定要连续，元素之间可以有空隙，叫做稀疏数组 。 每个数组都具有一个lengrh属性。
// 针对非稀疏数组，length属性就是数组元素的个数，针对稀疏数组，元素的length属性比所有元素的索引要大。
// 对象是无序的数据集合，而数组（Array）是一组有序数据集合。它们之间可以相互转换，但是数组拥有大量方法，适合完成一些复杂的运算。
//1、定义数组的方法
// 定义数组通过构造函数 Array() 和运算符 new 来实现。具体实现方法如下：
// （1）定义空数组
var a = new Array();
// 通过这种方式定义的数组是一个没有任何元素的空数组。
// （2）定义带有参数的数组
var a = new Array(1, 2, 3, "4", "5");
// 数组中每个参数都表示数组的一个元素值，数组的元素没有类型限制。可以通过数组下标来定位每个元素。通过数组的 length 属性确定数组的长度。
// （3）定义指定长度的数组
var a = new Array(6);
// 采用这种方法定义的数组拥有指定的元素个数，但是没有为元素初始化赋值，这时它们的初始值都是 undefined。
// 定义数组时，可以省略 new 运算符，直接使用 Array() 函数来实现。例如，下面两行代码的功能是相同的。
var a = new Array(6);
var a = Array(6);
// （4）定义数组直接量
var a = [1, 2, 3, "4", "5"];
// 使用中括号运算符定义的数组被称为数组直接量，使用数组直接量定义数组要比使用 Array() 函数定义数组速度要快，操作更方便。
//二、数组的读写
//   (1)读取数组中元素的值
//使用[]运算符可以存取数组元素的值。在[]内表示是元素在数组中的索引，非负整数值。例，通过下面方式可读取数组中第 3 个元素的值，即显示为 “3”。
var a = [1,2,3,"4","5"];
console.log(a[2])  //3
//   (2)修改数组中元素的值
//使用[]运算符可以存取数组元素的值,再通过'='等号赋值，将要修改的值进行赋值。例，通过下面方式可修改数组中第 3 个元素的值为2，即将数组修改为[1, 2, 2, "4", "5"]。
var a = [1, 2, 3, "4", "5"];
a[2] = 2;
console.log(a)  //[1, 2, 2, "4", "5"]
//三、数组的方法
// 数组的大小不是固定的，可以动态增加或删除数组元素。
// (1）改变数组的 length 属性
var a = [1,2,3,4,5];
a.length = 4;
console.log(a)  //[1, 2, 2, "4"]
// 在上例中，当改变数组的长度时，会自动在数组的末尾增加或删除元素，以实现改变数组的大小。
var a = [1,2,3,4,5];
delete a[1];
console.log(a) //[1, empty, 3, 4, 5]
// 使用 delete 运算符可以删除数组元素的值，但是不会改变 length 属性的值。
// (2) Join()：将数组成员通过一个分割符合并成字符串----原数组不发生改变
 var arr=new Array("html","css","javascript");     //创建数组的同时对元素赋值 
 console.log(arr.join());  //html,css,javascript          //默认以逗号分隔
 console.log(arr.join("*"));  //html*css*javascript       //使用*号分隔 
// (3) push()和 pop()：从数组最后增加元素或是删除元素----原数组发生改变
var a = [];    //定义一个空数组
 a.push(1,2,3);  console.log(a)  //a[1,2,3]
 a.push(4,5); console.log(a)    //a[1,2,3,4,5]
 a.pop();  console.log(a)  //a[1,2,3,4]
// (4) unshift()和 shift()：从数组的前面增加元素或是删除元素----原数组发生改变
 var a = [];    //定义一个空数组
 a.unshift(1,2,3); console.log(a)   //a[1,2,3]
 a.unshift(4,5); console.log(a)     //a[4,5,1,2,3]
 a.shift(4,5); console.log(a)    //a[5,1,2,3]
// (5) reverse()：将数组的数值进行翻转----原数组发生改变
 var arr = new Array(3,1,2,5,4);     //创建数组的同时对元素赋值
 console.log("原数组元素：" + arr); 
console.log("反向排列后的数组元素：" + arr.reverse());
console.log(arr);
// (6) Indexof()：返回数组中元素第一次出现的索引值
 var aList = [1,2,3,4,1,3,4]; 
alert(aList.indexOf(1)); 
// (7) splice()：在数组中增加或是删除成员----原数组发生改变
// 语法： 数组对象 splice(start,num,arr)
// 说明：start 表示 起始位置，num表示删除几位， arr表示删除后再添加的新数组
//splice(0)表示清空数组
var aList = [1, 2, 3, 4]; 
aList.splice(0,2);     
console.log(aList)    //[3,4]
 aList.splice(2,1,7,8,9);    //从第 2 个元素开始， 删除 1 个元素，然后在此位置增加'7,8,9'三个元素 
console.log(aList)   //[1,2,7,8,9,4 ]
// (8) slice()：从一个数组中选择（截取）元素,可以使用 Array 对象的 slice() 方法来获取数组中的某段数组元素。
// slice，就是“切片”的意思。
// 语法： 数组对象 slice(start,end)
// 说明： 参数 start 和 end 都是整数。其中，参数 start 是必选项，表示开始元素的位置，从 0 开始计算。
//end 是可选项，表示结束元素位置，也是 从 0 开始计算。
// 使用 slice 方法获取数组中的某段数组元素，可以得到一个新的子数组，内容为截取得到的片段。
//slice(start,end) 方法，截取的数据，包含start位置的元素，不包含end的元素；
var arr = ["html", "css", "javascript", "jQuery", "Ajax"];
var arr1 = arr.slice(1, 3);//截取arr中1开始到3结束的元素
console.log(arr1); //["css", "javascript"]

