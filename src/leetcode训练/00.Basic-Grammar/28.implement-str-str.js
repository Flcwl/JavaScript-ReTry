/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  for (let i = 0; ; i++) {
    for (let j = 0; ; j++) {
      if (j === needle.length) return i;
      if (i + j >= haystack.length) return -1;
      // 不一定在首位
      if (needle[j] !== haystack[i + j]) break;
    }
  }
};
