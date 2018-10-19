function ListNode(x){
    this.val = x;
    this.next = null;
}

/**
 * 输入一个链表，输出该链表中倒数第k个结点。
 * @param {*} head 
 * @param {*} k 
 */
function FindKthToTail(head, k) {
  // write code here
  if(k < 1) {
    return null;
  }
  // ? head instanceof ListNode
  // console.log(head instanceof ListNode);
  
  let arr = [];
  while(head !== null) {
    arr.push(head);
    head = head.next;
  }

  if(arr[arr.length - k]) { // 倒数第K个
    return arr[arr.length - k];
  }
  return null;
}

console.log( FindKthToTail(new ListNode(1), 1) );
