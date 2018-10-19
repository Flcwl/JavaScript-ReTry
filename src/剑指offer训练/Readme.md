# CodingInterviews

[OJ链接：牛客剑指Offer题目列表](http://www.nowcoder.com/ta/coding-interviews)

使用`JavaScript`语言对 **剑指offer（CodingInterviews）**一书中所有题目的实现和解答。

剑指offer一书主要是针对面试时面试官对面试者的一些常用考题，大部分属于基础题。尤其是对数据结构基础的考察尤为深入。在刷题过程中可以自行模拟面试进行思考和解答，然后再对照最优解进行思考和优化，会有意想不到的效果。

建议大一大二学弟学妹们学完数据结构拿来刷一波。可以很好地拔高基础。

另外，这里我使用的是JavaScript，因为本人好前端这一口，工作岗位是前端开发。但是之前在校期间一直都是使用的`C/C++`作为刷题工具，导致笔试碰到限制语言为`JavaScript`的编程题时即为不爽。用起来刷题遇到问题实在是不能再多。

## 对比总结如下：(V8 engine VS C/C++)

输入：

```javascript
var line = read_line();
var lines = line.split(' ');
// 输入默认字符串，转数字需要`parseInt()`
var n = parseInt(lines[0]);
```

输出：

```javascript
print(str...);
```

运算：

```javascript
// 默认运算 `* / %`为浮点运算
let mid = left + parseInt((right - left) / 2);
1.1 % 2 === 1.1	// true
// +-运算优先级高于移位运算（通用规则BUT易忘记）
let mid = left + (right - left >> 1);
```

字符串：

对于`JavaScript`高级语言，通过下标改变`string`是无效的，在`JavaScript`里面变量保存的是字符串地址, 仍为`''`

字符串底层是自带`const`的，相同字符串指向同一地址。

想要修改字符串只能新开内存空间，重指变量地址， 比如`+`号运算。

```javascript
var s = 'abc';
// 无效 对比c/c++, `char[]`声明字符串，有char单字符概念
s[1] = 'd';
console.log(s);	// Expected Output: 'abc'
```

另外字符串带有length属性可以访问其长度，但是不能改变

```javascript
console.log(s.length);	// Expected Output: 3
// 无效
s.length = 0;
```

```javascript
// 获取Unicode编码，涵盖ASCII码
const code = s.charCodeAt(0);	// 97
```

`>>` 和 `>>>`：

不同于c语言的是 C语言只有 无符号移位， JavaScript以及大部分高级语言还有如下：

`>>` 是带符号的右移

`>>>` 是无符号右移

```javascript
// 值得注意的是（求解释底层机制）
var a = 1 << 31; 	// -2147483648
a <<= 1;     	    // 0
var b = 1 << 32; 	// 1
```

`&&` 和 `||` ：

 在`JavaScript`里面 `&&` 和 `||` , 不转`boolean`输出

```javascript
// 短路特性
1 && 2 // 返回 2
1 || 2 // 返回 1

```

Array：

对于`JavaScript` 特有的彩蛋

```javascript
console.log( ![] );			// false
console.log( [] == true );	 // false
console.log( !'' );			// true
console.log( '' == true ); 	// false
```

判断数组为空尽量使用 `!arr || !arr.length`

其它神奇：

```javascript
let a = [];
// 在nowcoder oj会报错，必须初始化数组长度内操作 or push等API方法
a[0] = 1;

// https://stackoverflow.com/questions/52667916/what-happen-in-arrayrow-fillnew-arraycol-fillfalse
// 这里初始二维数组全为false，但是每行都是同一个数组对象
let b = Array(row).fill(Array(col).fill(false));
// 解决way
let b = new Array(6).fill(null).map(() => new Array(12).fill(false));

let c = [1, 2, 3];
let t = 2;
// 会先进行`=`左边的运算++topIdx
c[++t] = c[t];
console.log(c);	// Expected Output: [1, 2, 3, undefined]
```



## Questions

Question1: `i = 0` 和  `i > -1` 哪个效率更好？

Question2: `Array.prototype.shift()` 的底层实现？会影响到数组中其他所有元素下标。



## Reviews

通过刷题，还是能很好地复习数据结构基础以及编程思维训练，同时也很好地锻炼了用`JavaScript`编程的手感。对自己帮助还是蛮大的。也希望对大家有所帮助。

主要考察点：链表、栈、队列、堆、二叉树、递归、DFS、BFS、编程思维、编码风格。。。

另外，还有一个对自己比较难过的问题，刷题过程中一直尽量较少的使用`JavaScript` 的APIs，尽量多花时间用在思考。而这也导致面试手撕代码过程中，面试官既要考察面试者手写代码正确率，又要考虑效率。而对API不熟的原因可能导致面试官内心OS（这小子API都用不熟练，有API都不用，JS基础真的好吗？）哈哈。恶意揣测(逃

其实嗨是自己太弱了。。。



