# LeetCode

以下 18 个门类是面试中最常考的算法与数据结构知识点。

---

## 0. Basic

#### 综合题

- [x] Leetcode 987 Vertical Order Traversal of a Binary Tree

## 1. Sort

### Features

- 快速排序（Quick Sort）
  时间复杂度平均状态下 O（NlogN），空间复杂度 O（1）

- 归并排序（Merge Sort）
  最坏情况下时间复杂度 O（NlogN），空间复杂度 O（N）

### Problems

#### 归并

- [x] Leetcode 148. Sort List
- [x] Leetcode 56. Merge Intervals
- [x] Leetcode 179. Largest Number
- [x] Leetcode 75. Sort Colors

#### 快排

- [] Leetcode 4. Median of Two Sorted Arrays
- [x] Leetcode 215. Kth Largest Element

---

## 2. Linked List

链表可以保证插入删除操作都是 O（1），查找任意元素位置 O（N）

### Features

- 链表结构实现
- 遍历链表
- 快慢指针
- 链表反转

### Problems

#### 入门（思维）

- [x] Leetcode 160. Intersection of Two Linked Lists（链表长度差值）

#### 快慢指针

- [x] Leetcode 876. Middle of the Linked List
- [x] Leetcode 141. Linked List Cycle
- [x] Leetcode 142. Linked List Cycle II

#### 头插法（反转链表）

- [x] Leetcode 206. Reverse Linked List
- [x] Leetcode 92. Reverse Linked List II

#### 虚拟 root 节点

- [x] Leetcode 328. Odd Even Linked List

---

## 3. Queue

### Features

- 基本原理
- 基本实现
- 增删查改复杂度

### Problems

- [x] Leetcode 225. Implement Stack using Queues
- [-] Leetcode 346. Moving Average from Data Stream
- [-] Leetcode 281. Zigzag Iterator
- [-] Leetcode 1429. First Unique Number
- [-] Leetcode 362. Design Hit Counter

---

## 4. Stack

### Features

- 基本原理
- 基本实现
- 增删查改复杂度

### Problems

- [x] Leetcode 232. Implement Queue using Stacks
- [x] Leetcode 150. Evaluate Reverse Polish Notation
- [x] Leetcode 224. Basic Calculator II (I, II, III, IV)
- [x] Leetcode 20. Valid Parentheses
- [x] Leetcode 1472. Design Browser History
- [x] Leetcode 1209. Remove All Adjacent Duplicates in String II
- [x] Leetcode 1249. Minimum Remove to Make Valid Parentheses
- [x] Leetcode 735. Asteroid Collision
- [x] Leetcode 22 Generate Parentheses

---

## 5. HashMap/ HashSet

### Features

- 基本原理
- 基本实现
- 增删查改复杂度

### Problems

- [x] Leetcode 1. Two Sum
- [x] Leetcode 409. Longest Palindrome
- [x] Leetcode 146. LRU Cache
- [x] Leetcode 128. Longest Consecutive Sequence
- [x] Leetcode 73. Set Matrix Zeroes
- [x] Leetcode 380. Insert Delete GetRandom O(1)
- [x] Leetcode 49. Group Anagrams
- [x] Leetcode 350. Intersection of Two Arrays II
- [x] Leetcode 299. Bulls and Cows
- [-] Leetcode 348. Design Tic-Tac-Toe

---

## 6. Heap／Priority Queue

### Features

- 基本原理
- 基本实现
- 增删查改复杂度

### Problems

- [x] Leetcode 973. K Closest Points
- [x] Leetcode 347. Top k Largest Elements
- [x] Leetcode 23. Merge K Sorted Lists
- [-] Leetcode 1086. High Five
- [x] Leetcode 68. Merge Sorted Arrays
- [x] Leetcode 692. Top K Frequent Words
- [x] Leetcode 378. Kth Smallest Element in a Sorted Matrix
- [x] Leetcode 767. Reorganize String
- [x] Leetcode 895. Maximum Frequency Stack

---

## 7. Binary Search

### Features

- 时间复杂度 logN
- 显式查找的数据是否可以分为两部分，前半部分为 X，后半部分为 O
- 隐式

### Problems

#### 显式二分法

- [x] Leetcode 34. Find First and Last Position of Element in Sorted Array
- [x] Leetcode 33. Search in Rotated Sorted Array
- [x] Leetcode 374 Guess Number Higher or Lower
- [x] Leetcode 295. Find Median from Data Stream
- [x] Leetcode 1095. Find in Mountain Array
- [x] Leetcode 162. Find Peak Element
- [x] Leetcode 278. First Bad Version
- [x] Leetcode 74. Search a 2D Matrix

#### 隐式二分法

- [x] Leetcode 69. Sqrt(x)
- [x] Leetcode 240. Search a 2D Matrix II
- [x] Leetcode 540. Single Element in a Sorted Array
- [-] Leetcode 644. Maximum Average Subarray II
- [x] Leetcode 528. Random Pick with Weight
- [x] Leetcode 1300. Sum of Mutated Array Closest to Target
- [-] Leetcode 1060. Missing Element in Sorted Array

---

## 8. double Pointer（双指针）

### Features

- 同向（即两个指针都相同一个方向移动）
- 背向（两个指针从相同或者相邻的位置出发，背向移动直到其中一根指针到达边界为止）
- 相向（两个指针从两边出发一起向中间移动直到两个指针相遇）

### Problems

#### 背向双指针：(基本上是回文串)

- [x] Leetcode 125. Valid Palindrome
- [x] Leetcode 5. Longest Palindromic Substring

#### 相向双指针：(以 two sum 为基础的一系列题)

- [x] Leetcode 167. Two Sum II - Input array is sorted
- [x] Leetcode 15. 3Sum
- [x] Leetcode 16. 3Sum Closest
- [x] Leetcode 18. 4Sum
- [x] Leetcode 454. 4Sum II
- [-] Leetcode 277. Find the Celebrity

#### 同向双指针\滑动窗口：（字符串数组维持原顺序依次处理）

- https://www.bilibili.com/video/BV1V54y1Q7bd
- https://www.bilibili.com/video/BV113411v7Ak

- [x] Leetcode 283. Move Zeroes
- [x] Leetcode 26. Remove Duplicate Numbers in Array
- [x] Leetcode 395. Longest Substring with At Least K Repeating Characters
- [-] Leetcode 340. Longest Substring with At Most K Distinct Characters
- [x] Leetcode 3. Longest Substring Without Repeating Characters
- [x] Leetcode 76. Minimum Window Substring
- [x] Leetcode 1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit

---

## 9. DFS（深度优先搜索）

### Features

（1）图中（有向无向皆可）的符合某种特征（比如最长）的路径以及长度
（2）排列组合
（3）遍历一个图（或者树）
（4）找出图或者树中符合题目要求的全部方案

- DFS 基本模板（需要记录路径，不需要返回值 and 不需要记录路径，但需要记录某些特征的返回值）
- 除了遍历之外多数情况下时间复杂度是指数级别，一般是 O(方案数 × 找到每个方案的时间复杂度)
- 递归题目都可以用非递归迭代的方法写，但一般实现起来非常麻烦
- 基于树的 DFS：需要记住递归写前序中序后序遍历二叉树的模板

### Problems

- [x] Leetcode 543 Diameter of Binary Tree
- [x] Leetcode 226 Invert Binary Tree
- [x] Leetcode 124 Binary Tree Maximum Path Sum
- [x] Leetcode 236 Lowest Common Ancestor of a Binary Tree（同 235）
- [x] Leetcode 101 Symmetric Tree
- [x] Leetcode 105 Construct Binary Tree from Preorder and Inorder Traversal
- [x] Leetcode 104 Maximum Depth of Binary Tree
- [x] Leetcode 951 Flip Equivalent Binary Trees
- [-] Leetcode 1485 Clone Binary Tree With Random Pointer
- [x] Leetcode 572 Subtree of Another Tree
- [x] Leetcode 863 All Nodes Distance K in Binary Tree
- [x] Leetcode 394 Decode String
- [x] Leetcode 1110 Delete Nodes And Return Forest

#### 二叉搜索树

- 中序遍历为单调递增的二叉树
- 根节点的值比左子树任意节点值都大，比右子树任意节点值都小
- 增删查改均为 O（h）复杂度，h 为树的高度；
- 注意不是所有的 BST 题目都需要递归，有的题目只需要 while 循环即可

#### Problems

- [x] Leetcode 230 Kth Smallest element in a BST
- [x] Leetcode 98 Validate Binary Search Tree
- [-] Leetcode 270 Cloest Binary Search Tree Value
- [x] Leetcode 669 Trim a Binary Search Tree
- [x] Leetcode 700 Search Range in Binary Search Tree
- [x] Leetcode 108 Convert Sorted Array to Binary Search Tree
- [-] Leetcode 333 Largest BST Subtree
- [-] Leetcode 510 Inorder Successor in BST II

#### 字符串搜索 DFS

- [x] Leetcode 93 Restore IP Addresses

#### 图搜索 DFS

- 和 BFS 一样一般需要一个 set 来记录访问过的节点
- 避免重复访问造成死循环
- 四个方向边探边走

- [x] Leetcode 54. Spiral Matrix
- [x] Leetcode 200. Number of Islands
- [x] Leetcode 341 Flatten Nested List Iterator
- [x] Leetcode 51 N-Queens
- [-] Leetcode 291 Word Pattern II (I 为简单的 Hashmap 题)
- [] Leetcode 126 Word Ladder II （I 为 BFS 题目）
- [] Leetcode 37 Sodoku Solver
- [] Leetcode 301 Remove Invalid Parentheses
- [] Leetcode 212 Word Search II （I, II）
- [-] Leetcode 1087 Brace Expansion
- [] Leetcode 399 Evaluate Division
- [-] Leetcode 1274 Number of Ships in a Rectangle
- [] Leetcode 1376 Time Needed to Inform All Employees
- [-] Leetcode 694 Number of Distinct Islands
- [-] Leetcode 586 Score of Parentheses

#### 排列组合搜索 DFS

- 与图类 DFS 方法一致，但是排列组合的特征更明显

- [x] Leetcode 17 Letter Combinations of a Phone Number
- [x] Leetcode 39 Combination Sum （I, II, III, IV）
- [x] Leetcode 90 Subsets II （重点在于如何去重）
- [x] Leetcode 47 Permutation II
- [x] Leetcode 77 Combinations
- [x] Leetcode 526 Beautiful Arrangement

#### 记忆化搜索（DFS + Memoization Search）

- 算是动态规划的一种，
- 递归每次返回时同时记录下已访问过的节点特征，避免重复访问同一个节点，可以有效的把指数级别的 DFS 时间复杂度降为多项式级别

- [] Leetcode 139 Word Break II
- [] Leetcode 131 Palindrome Partitioning
- [] Leetcode 72 Edit Distance
- [] Leetcode 377 Combination Sum IV
- [] Leetcode 1335 Minimum Difficulty of a Job Schedule

## 10. BFS（宽度优先搜索）

### Features

- 记住层数 && 不记住层数
- 时间复杂度和空间复杂度都是 O（N+M），N 为节点个数，M 为边的个数
- 基于树的 BFS：不需要专门一个 set 来记录访问过的节点

### Problems

#### 遍历图（或者树），求最短路径长度

- [x] Leetcode 102 Binary Tree Level Order Traversal
- [x] Leetcode 103 Binary Tree Zigzag Level Order Traversal
- [x] Leetcode 374 Binary Tree Vertical Order Traversal
- [x] Leetcode 297 Serialize and Deserialize Binary Tree （很好的 BFS 和双指针结合的题）
- [x] Leetcode 133. Clone Graph
- [] Leetcode 127. Word Ladder
- [] Leetcode 490. The Maze
- [] Leetcode 323. Connected Component in Undirected Graph
- [] Leetcode 130. Surrounded Regions
- [] Leetcode 752. Open the Lock
- [] Leetcode 815. Bus Routes
- [] Leetcode 1091. Shortest Path in Binary Matrix
- [] Leetcode 542. 01 Matrix
- [] Leetcode 1293. Shortest Path in a Grid with Obstacles Elimination

#### 拓扑排序（https://zh.wikipedia.org/wiki/%E6%8B%93%E6%92%B2%E6%8E%92%E5%BA%8F）

- [] Leetcode 207 Course Schedule （I, II）
- [] Leetcode 444 Sequence Reconstruction
- [] Leetcode 269 Alien Dictionary

---

## 12. Trie（字典树）

- https://zh.wikipedia.org/wiki/Trie

### Features

- 多数情况下可以通过用一个 set 来记录所有单词的 prefix 来替代
- 时间复杂度不变，但空间复杂度略高

### Problems

- [x] Leetcode 208 Implement Trie (Prefix Tree)
- [x] Leetcode 211 Design Add and Search Words Data Structure
- [x] Leetcode 1268 Search Suggestions System
- [x] Leetcode 79 Word Search

## 13. HashMap

### Features

- 基于红黑树（平衡二叉搜索树）的一种树状 hashmap
- 增删查改、找最大最小均为 logN 复杂度

### Problems

- [x] Leetcode 729 My Calendar I
- [x] Leetcode 981 Time Based Key-Value Store
- [x] Leetcode 846 Hand of Straights
- [x] Leetcode 826 Most Profit Assigning Work

## 14. Prefix Sum（前缀和）

### Features

- 提前用 O（N）的时间提前算好从第 0 个数字到第 i 个数字之和
- 之后在使用中可以在 O（1）时间内计算出第 i 到第 j 个数字之和

### Problems

- [x] Leetcode 53 Maximum Subarray
- [x] Leetcode 1423 Maximum Points You Can Obtain from Cards
- [x] Leetcode 1031 Maximum Sum of Two Non-Overlapping Subarrays
- [x] Leetcode 523 Continuous Subarray Sum

## 15. Union Find（并查集）

把两个或者多个集合合并为一个集合，包含合并与查找两个操作

### video

https://www.bilibili.com/video/BV13t411v7Fs?spm_id_from=333.999.0.0

### Features

- 如果数据不是实时变化，本类问题可以用 BFS 或者 DFS 的方式遍历
- 如果数据实时变化（data stream）则并查集每次的时间复杂度可以视为 O（1）

### Problems

- [x] Leetcode 721 Accounts Merge
- [x] Leetcode 547 Number of Provinces
- [-] Leetcode 737 Sentence Similarity II
- [x] Leetcode 990 Satisfiability of Equality Equations
- [x] Leetcode 1319 Number of Islands II

## 16.Monotone Stack／Queue（单调栈与单调队列）

### Features

- 单调的意思是保留在栈或者队列中的数字是单调递增或者单调递减的
- 单调栈一般用于解决数组中找出每个数字的第一个大于／小于该数字的位置或者数字

### Problems

- [x] Leetcode 739 Daily Temperatures
- [x] Leetcode 901 Online Stock Span
- [x] Leetcode 84 Largest Rectangle in Histogram
- [x] Leetcode 85 Maximum Rectangle
- [x] Leetcode 503 Next Greater Element II
- [x] Leetcode 239 Sliding Window Maximum （唯一的单调队列题）

## 17. Sweep Line（扫描线算法）

### Features

- 把控扫描的先后顺序
- 巧妙的解决时间安排冲突的算法

### Problems

- [-] Leetcode 253 Meeting Room II（Meeting Room I 也可以使用）
- [x] Leetcode 218 The Skyline Problem
- [-] Leetcode 759 Employee Free Time

## 18. Dynamic Programming（动态规划）

- for 循环方式的动态规划，非 Memoization Search 方式
- DP 可以在多项式时间复杂度内解决 DFS 需要指数级别的问题
- 常见的题目包括找最大最小，找可行性，找总方案数等，一般结果是一个 Integer 或者 Boolean

### Problems

- [x] Leetcode 674 Longest Continuous Increasing Subsequence
- [x] Leetcode 70 Climbing Stairs
- [x] Leetcode 62 Unique Paths II
- [x] Leetcode 64 Minimum Path Sum
- [x] Leetcode 368 Largest Divisible Subset
- [x] Leetcode 300 Longest Increasing Subsequence
- [] Leetcode 354 Russian Doll Envelopes
- [-] Leetcode 256 Paint House

#### 前缀极小值

- [x] Leetcode 121 Best Time to Buy and Sell Stock

#### 贪心

- [x] Leetcode 55 Jump Game
- [x] Leetcode 45 Jump Game II
- [x] Leetcode 403 Frog Jump
- [x] Leetcode 132 Palindrome Partitioning II
- [] Leetcode 312 Burst Balloons
- [x] Leetcode 1143 Longest Common Subsequence
- [x] Leetcode 115 Distinct Subsequences
- [] Leetcode 72 Edit Distance
- [x] Leetcode 91 Decode Ways
- [] Leetcode 639 Decode Ways II
- [] Leetcode 712 Minimum ASCII Delete Sum for Two Strings
- [] Leetcode 221 Maximal Square

#### 递推公式 \* 8

- [x] Leetcode 198 House Robber
- [x] Leetcode 213 House Robber II
- [] Leetcode 87 Scramble String
- [-] Leetcode 1062 Longest Repeating Substring
- [] Leetcode 1140 Stone Game II
- [x] Leetcode 322 Coin Change
- [x] Leetcode 518 Coin Change II
- [x] Leetcode 97 Interleaving String

<!-- https://zhuanlan.zhihu.com/p/349940945 -->
<!-- https://www.bilibili.com/read/cv9904414?spm_id_from=333.999.0.0 -->

## 18. 数学

- [x] Leetcode 264. Ugly Number II
