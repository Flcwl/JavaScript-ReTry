/*
 * @lc app=leetcode id=299 lang=javascript
 *
 * [299] Bulls and Cows
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  const mp = new Map();
  // 生成每个字符的坐标表
  for (let i = 0; i < secret.length; i++) {
    const ch = secret[i];
    let indexes = mp.get(ch);
    if (!indexes) {
      indexes = [];
      mp.set(ch, indexes);
    }
    indexes.push(i);
  }

  // 猜对了数字，并且在正确的位置
  let bulls = 0;
  const arr = guess.split("");
  for (let i = 0; i < arr.length; i++) {
    const ch = arr[i];
    let indexes = mp.get(ch);

    // 猜对了数字
    if (indexes) {
      const pos = indexes.indexOf(i);
      if (pos !== -1) {
        arr[i] = -1;
        bulls += 1;
        const end = indexes.pop();
        // 不是尾部元素，则需要交换位置
        if (end !== i) {
          indexes[pos] = end;
        }
      }
    }
  }

  // 猜对了数字，但是不在正确的位置
  let cows = 0;

  for (let i = 0; i < arr.length; i++) {
    const ch = arr[i];

    if (ch === -1) continue;

    let indexes = mp.get(ch);
    // 猜对了数字（之前已经把在正确位置的全部提取出去了）
    if (indexes && indexes.length > 0) {
      cows++;
      indexes.pop();
    }
  }

  return bulls + "A" + cows + "B";
};
// @lc code=end
