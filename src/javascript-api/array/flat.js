export const flat = (arr) => {
  return arr.reduce((prev, next) => {
      return prev.concat(Array.isArray(next) ? flat(next) : next)
  }, [])
}

const test = [1, [2, 3, [4, [5, 6]]]]
console.log(flat(test));
