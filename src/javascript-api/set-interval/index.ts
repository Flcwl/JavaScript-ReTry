/**
 *  使用 setTimeout 实现 setInterval
 * @param fn
 * @param timeout
 * @param args
 * @returns
 */
export const mySetInterval = (fn: Function, timeout: number, ...args: any[]) => {
  const timer = { current: true }
  const interval = () =>{
    if (timer.current) {
      fn(...args)
      window.setTimeout(interval, timeout)
    }
  }

  window.setTimeout(interval, timeout);

  return {
    abort: () => { timer.current = false }
  }
}
