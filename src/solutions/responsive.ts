/**
 * 响应式数据：数据双向绑定
 */
export const responsive = ({ initialValue, onChange }: any) => {
  const obj = { current: initialValue }
  // 数据劫持
  Object.defineProperty(obj, 'current', {
    configurable: true,
    enumerable: true,
    get() {
      console.log('获取数据了')
    },
    set(newVal) {
      console.log('数据更新了')
      onChange(newVal)
    }
  })

  return obj
}

// test
function test () {
  const inputElement = document.getElementById('input')
  const spanElement = document.getElementById('span')

  if (!inputElement || !spanElement) return

  const data = responsive({
    initialValue: '',
    onChange:  (newVal: string) => {
      spanElement.innerHTML = newVal
    }
  })

  // 输入监听
  inputElement.addEventListener('keyup', function(evt) {
    // @ts-ignore
    data.current = evt.target.value
  })
}
