/*
 * @lc app=leetcode id=767 lang=javascript
 *
 * [767] Reorganize String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
  const mp = {};
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    mp[ch] = (mp[ch] || 0) + 1;
  }
  const arr = Object.entries(mp).sort((a, b) => a[1] - b[1]);
  const maxLen = arr[arr.length - 1];

  // 处理最大频率的数值，保证最大的得到均匀填充，其余字符填充在间隔区
  // aba
  // aaab
  // 剪枝
  if (!maxLen || maxLen[1] > (s.length + 1) >> 1) {
    return "";
  }

  // aaaaccccb
  // a_a_a_a_c
  // acacaca_c
  // acacacabc
  let t = 0;
  let ret = [];

  while (arr.length > 0) {
    let [ch, count] = arr.pop();

    // 奇偶法顺序插入
    while (count--) {
      if (t >= s.length) t = 1;
      ret[t] = ch;
      t += 2;
    }
  }
  return ret.join("");
};
// @lc code=end

// console.log("[ reorganizeString ] >", reorganizeString("ogccckcwmbmxtsbmozli"));
// c_c_c_c_m_m_m_b_b_o_;
// cociclczmsmtmxbwbkog;
