/**
 * 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，
 * 打印能拼接出的所有数字中最小的一个。
 * 例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。
 * https://blog.csdn.net/wyg1997/article/details/52169036
 * @param {*} numbers
 */
function PrintMinNumber(numbers) {
  // write code here
  // 排序 比较ab与 ba 思维好题
  return numbers.sort((a, b) => {
    return (+('' + a + b)) - (+('' + b + a));
  }).join('');
}

console.log( PrintMinNumber([3, 32, 321]) );
