/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

/**
 * 输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。
 * @param {*} head 
 */
function printListFromTailToHead(head) {
  // write code here
  let arr = [];
  let list = head;
  while(list) {
    arr.push(list.val);
    list = list.next;
  }

  return arr.reverse()

  // list = head = new ListNode(arr[arr.length - 1]);

  // // >= 0 和 > -1 哪个效率更好？
  // for (let i = arr.length - 2; i >= 0; --i) {
  //   let node = new ListNode(arr[i]);
  //   list.next = node;
  //   list = node;
  // }
  // return head;
}
