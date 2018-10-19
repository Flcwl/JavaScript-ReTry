/**
 * 给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],
 * 其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。
 * 不能使用除法。
 * @param {*} array
 */
function multiply(array) {
  // write code here
  if (!array || !array.length) {
    return [];
  }

  let b = [1, ...array];
  let c = [...array, 1];
  // 除开自己索引的所有数积
  for (let i = 1; i < array.length; i++) {
    b[i] *= b[i - 1];
  }
  for (let i = b.length - 2; i > 0; --i) {
    c[i] *= c[i + 1];
  }
  let res = Array(array.length).fill(undefined);
  for (let j = 0; j < res.length; j++) {
    res[j] = b[j] * c[j + 1];
  }
  return res;

  // 先左前(i-1)后右后(i+1) 取积
  // int n = A.size();
  // vector<int> b(n);
  // int ret = 1;
  // for (int i = 0; i < n; ret *= A[i++]) {
  //   b[i] = ret;
  // }
  // ret = 1;
  // for (int i = n-1; i >= 0; ret *= A[i--]) {
  //   b[i] *= ret;
  // }
  // return b;
}

console.log(multiply([2, 1, 3, 4, 3]));
