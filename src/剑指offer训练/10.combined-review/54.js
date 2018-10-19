/**
 * 请实现一个函数用来找出字符流中第一个只出现一次的字符。
 * 例如，当从字符流中只读出前两个字符"go"时，第一个只出现一次的字符是"g"。
 * 当从该字符流中读出前六个字符“google"时，第一个只出现一次的字符是"l"。
 * 如果当前字符流没有存在出现一次的字符，返回#字符。
 */

let str;
let hash;
let queue;

//Init module if you need
function Init() {
  // write code here
  str = '';
  hash = Array(256).fill(0);
  queue = [];
}

//Insert one char from stringstream
function Insert(ch) {
  // write code here
  str += ch;
  let code = ch.charCodeAt(0);
  hash[code]++;

  // if (queue.length && queue[0] === ch) {
  //   queue.shift();
  // }
  if (hash[code] > 1) {
    let idx = queue.indexOf(ch);
    if (idx !== -1) { // 必要
      queue[idx] = -1;
    }
  }
  if (hash[code] === 1) {
    queue.push(ch);
  }
  // console.log(queue);
}

//return the first appearence once char in current stringstream
function FirstAppearingOnce() {
  // write code here
  // stream

  let idx = 0;
  while (idx < queue.length && queue[idx] === -1) {
    // 队列可优化 left++
    queue.shift();
  }
  if (!queue.length) {
    return '#';
  }
  return queue[0];
}

Init();

Insert('g');
console.log(FirstAppearingOnce());

Insert('o');
console.log(FirstAppearingOnce());

Insert('o');
console.log(FirstAppearingOnce());

Insert('g');
console.log(FirstAppearingOnce());

Insert('l');
console.log(FirstAppearingOnce());

Insert('e');
console.log(FirstAppearingOnce());