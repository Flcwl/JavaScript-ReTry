
const hasOwnProperty = Object.prototype.hasOwnProperty
export const hasOwnProp = (obj: object, key: string): boolean => hasOwnProperty.call(obj, key)

const objectToString = Object.prototype.toString

/**
 * Will return the object type for any structure
 */
const getObjectType = (o: unknown): string => objectToString.call(o).slice(8, -1)


/**
 * 循环引用检查：即查找祖先和孩子是否有互相指针
 */
export function isCyclic(obj: Object): boolean {
  const visitedItemsSet = new Set()

  function detect(obj: any) {
    // 不是对象类型的话，可以直接跳过
    if (!obj) return false
    if (getObjectType(obj) !== 'Object') return false

    if (visitedItemsSet.has(obj)) return true

    visitedItemsSet.add(obj)

    for (const key in obj) {
      if (hasOwnProp(obj, key) && detect(obj[key])) {
        return true
      }
    }

    // 向上返回，我们需要移除该对象，保证上一级的平级检测只包含其祖先
    // let tempObj = {
    //   name: '前端胖头鱼'
    // }
    // let obj4 = {
    //   obj1: tempObj,
    //   obj2: tempObj
    // }
    visitedItemsSet.delete(obj)
    return false
  }

  return detect(obj)
}

const a = { b: 1 }
console.log(isCyclic(a));
const b = { a: a, b: a }
console.log(isCyclic(b));
const c = {a: a, b: { c: a}}
console.log(isCyclic(c));
const d = { a: { b: { c: { } }}, e: { f: {} } }
// @ts-ignore
d.a.b.c.d = d.e
// @ts-ignore
d.e.f.g = d.a
console.log(isCyclic(d))


/**
 * 深拷贝对象
 * @param obj
 */
export const clone = <T = any>(obj: T, visitedMap = new WeakMap()): T => {
  if (!obj)return obj

  if (visitedMap.has(obj as any)) return visitedMap.get(obj as any)

  const objType = getObjectType(obj)

  switch (objType) {
    case 'Object':
      const object = obj as any
      const copiedObject: any = Object.create(
        Object.getPrototypeOf(object),
        Object.getOwnPropertyDescriptors(obj)
      )

      visitedMap.set(object, copiedObject)

      for (const key in object) {
        if (hasOwnProp(object as any, key)) {
          copiedObject[key] = clone(object[key])
        }
      }
      return copiedObject as T

    case 'Array':
      const objArray: Record<string, any>[] = obj as any
      const copiedArray = []

      visitedMap.set(object, copiedObject)

      for (let i = 0; i < objArray.length; ++i) {
        copiedArray.push(clone(objArray[i]))
      }

      return (copiedArray as any) as T

    case 'Date':
      const objDate: Date = obj as any
      const clonedDate = new Date()

      visitedMap.set(object, copiedObject)

      clonedDate.setTime(objDate.getTime())

      return (clonedDate as any) as T

    default:
      // not need clone such as `Function`, `BitInt`, `BitFloat`, 'RegExp'
      return obj
  }
}
