/**
 * 一个整型数组里除了两个数字之外，其他的数字都出现了偶数次。
 * 请写程序找出这两个只出现一次的数字。
 * @param {*} array 
 */
function FindNumsAppearOnce(array) {
  // write code here
  // return list, 比如[a,b]，其中ab是出现一次的两个数字
  if (!array || !array.length) {
    return [];
  }
  let eo = 0;
  // 有趣的idea 异或分割
  for (let i = 0; i < array.length; i++) {
    eo ^= array[i];
  }
  // console.log(eo);

  let idx = 0;
  // 确定两数不同的分割位
  // 相异则为相同位
  while (!(1 & (eo >> idx))) {
    idx++;
  }
  
  let list = [eo, eo];
  for (let j = 0; j < array.length; j++) {
    if (array[j] & (1 << idx)) {
      // 确定其一结果
      list[0] ^= array[j];
    }
  }
  // eo 为两数异或结果
  list[1] ^= list[0];
  return list;
}

// console.log( 4^6 );

console.log( FindNumsAppearOnce([2, 4, 3, 6, 3, 2, 5, 5]) );