/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const courses = new Array(numCourses).fill(null).map(() => []);
  // 学 a 必须先学 b，构成一个递归学习路径
  prerequisites.forEach(([a, b]) => {
    courses[a].push(b)
  })

  // 1 可学 0 未学 -1 无法学（存在环：死锁）
  const visit = new Array(numCourses).fill(0)

  const dfs = (n) => {
    if (visit[n] !== 0) return visit[n]

    const deps = courses[n]

    // 无依赖课程，直接学会
    if (deps === 0) return (visit[n] = 1)

    // 先标识无法学习，后续存在依赖时可直接判定环关系
    visit[n] = -1
    for (let i = 0; i < deps.length; i++) {
      const dep = deps[i];
      const result = dfs(dep)
      if (result === -1) return -1
    }

    return (visit[n] = 1)
  }

  for (let i = 0; i < numCourses; i++) {
    const result = dfs(i)
    if (result === -1) return false
  }

  // 从 0 到 numCourses 都能学
  return true
};
// @lc code=end

