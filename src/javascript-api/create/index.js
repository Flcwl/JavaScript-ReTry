/**
 * 以传入对象作为原型生成新对象
 */
export function create (obj) {
  function Fn () {}
  Fn.prototype = obj
  return new Fn()
}
