/*
 * @lc app=leetcode id=297 lang=javascript
 *
 * [297] Serialize and Deserialize Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const arr = [];
  const dfs = (node) => {
    arr.push(node ? node.val : null);

    if (node) {
      dfs(node.left);
      dfs(node.right);
    }
  };

  dfs(root);
  return arr.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const arr = data.split(",");
  let index = 0;
  let ret = [];
  const dfs = () => {
    const val = arr[index++];
    let node = null;
    if (val !== "") {
      node = new TreeNode(Number.parseInt(val));
      node.left = dfs();
      node.right = dfs();
    }
    return node;
  };

  return dfs();
};

// /**
//  * Encodes a tree to a single string.
//  *
//  * @param {TreeNode} root
//  * @return {string}
//  */
// var serialize = function (root) {
//   const arr = [];
//   const dfs = (node) => {
//     arr.push(node ? node.val : null);

//     if (node) {
//       dfs(node.left);
//       dfs(node.right);
//     }
//   };

//   dfs(root);
//   return arr.join(",");
// };

// /**
//  * Decodes your encoded data to tree.
//  *
//  * @param {string} data
//  * @return {TreeNode}
//  */
// var deserialize = function (data) {
//   const arr = data.split(",");
//   let index = 0;

//   const dfs = (parent, pos = 0) => {
//     const val = arr[index++];
//     const node = val === "" ? null : new TreeNode(Number(val));

//     if (pos === -1) {
//       parent.left = node;
//     } else if (pos === 1) {
//       parent.right = node;
//     } else {
//       parent = node;
//     }

//     if (node) {
//       dfs(node, -1);
//       dfs(node, 1);
//     }

//     return parent;
//   };

//   return dfs(null);
// };

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
