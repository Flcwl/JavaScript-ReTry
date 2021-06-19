/*
 * @lc app=leetcode id=1472 lang=javascript
 *
 * [1472] Design Browser History
 */

// @lc code=start
/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.list = [homepage];
  this.end = 0;
  this.length = 1;
  // this.fallback = homepage;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.end++;
  this.list[this.end] = url;
  this.length = this.end + 1;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  const end = this.end - steps;
  this.end = end < 0 ? 0 : end;
  return this.list[this.end];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  const end = this.end + steps;
  this.end = end < this.length ? end : this.length - 1;
  return this.list[this.end];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
// @lc code=end
