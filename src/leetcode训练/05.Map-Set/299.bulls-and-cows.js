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
  // 公牛
  let bulls = 0;
  // 奶牛
  let cows = 0;
  // 0 ~ 9 用于记录不同位置字符出现次数
  const mp = Array(10).fill(0);

  for (let i = 0; i < secret.length; ++i) {
    const secretNum = secret[i];
    const guessNum = guess[i];

    // 猜对了数字，并且在正确的位置
    if (secretNum === guessNum) {
      bulls++;
    } else {
      const secretPos = secretNum.charCodeAt() - 48;
      const guessPos = guessNum.charCodeAt() - 48;
      // 规定对 secret 进行加加操作，对 guess 进行减减操作
      // 如果两个集合中都出现该字符，则最终会该字符数量会相互抵消
      // 对 secret 操作时，判断下 guess 是否也存在该元素（count < 0）
      // 对 guess 操作时，判断下 secret 是否也存在该元素（count > 0）

      // 猜对了数字，但是不在正确的位置
      if (mp[secretPos] < 0) cows++;
      mp[secretPos]++;

      if (mp[guessPos] > 0) cows++;
      mp[guessPos]--;
    }
  }

  return bulls + "A" + cows + "B";
};
// @lc code=end
