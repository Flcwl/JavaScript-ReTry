/*
 * @lc app=leetcode id=211 lang=javascript
 *
 * [211] Design Add and Search Words Data Structure
 */

// @lc code=start

var WordDictionary = function() {
  this.treeMap = { value: {} }
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let mp = this.treeMap.value

  for (var i = 0; i < word.length; i++) {
    const ch = word[i]
    if (!mp[ch]) {
      mp[ch] = { value: {} }
    }

    // 标记存在该单词
    if (i === word.length - 1) {
      mp[ch].hasNode = true
    }

    mp = mp[ch].value
  }
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  let list = [this.treeMap]

  for (let i = 0; i < word.length; i++) {
    const ch = word[i]
    if (ch === '.') {
      // console.log(list);
      // [{ value: { a: { value: {} }, b: {value: {} } } }]
      list = list.reduce((acc, cur) => {
        const nextList = Object.values(cur.value)
        return acc.concat(nextList)
      }, [])

      continue
    }

    // [{ value: {} }, { value: {} }]
    list = list.filter((item) => item.value[ch] !== undefined)

    if (list.length === 0) return false

    console.log(list, i, ch);
    list = list.reduce((acc, cur) => {
      const nextList = Object.values(cur.value[ch].value)
      return acc.concat(nextList)
    }, [])

    console.log(list);
  }

  // console.log(list);
  return list.some((item) => item.hasNode)
};
// @lc code=end

const a = new WordDictionary();

console.log(
  a.addWord('at'),
  a.addWord('and'),
  a.addWord('an'),
  a.addWord('add'),
  // a.search('a'),
  // a.search('.at'),
  a.addWord('bat'),
  // a.search('.at'),
  // a.search('an.'),
  // a.search('a.d.'),
  a.search('b.')
  // a.search('a.d'),
  // a.search('.')
);

console.log(JSON.stringify(a.treeMap));
