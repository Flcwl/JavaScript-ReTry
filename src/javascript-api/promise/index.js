const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

export function MyPromise(fn) {
  this.status = PENDING // promise 当前状态
  this.value = undefined // promise 值

  this.resolvedCallbacks = [] // resolved 回调集
  this.rejectedCallbacks = [] // rejected 回调集

  var self = this

  const resolve = (value) => {
    if (value instanceof MyPromise) {
      return value.then(resolve, reject)
    }

    // 这里是有宏任务模拟微任务
    setTimeout(() => {
      if (self.status !== PENDING) return

      self.status = RESOLVED
      self.value = value

      self.resolvedCallbacks.forEach((callback) => {
        callback(value)
      })
    }, 0)
  }

  const reject = (value) => {
    setTimeout(() => {
      if (self.status !== PENDING) return

      self.status = REJECTED
      self.value = value

      self.rejectedCallbacks.forEach((callback) => {
        callback(value)
      })
    }, 0)
  }

  try {
    fn(resolve, reject)
  } catch (err) {
    reject(err)
  }
}

MyPromise.prototype.then = function (onResolved, onRejected) {
  if (typeof onResolved !== 'function') {
    onResolved = function (value) { return value }
  }

  if (typeof onRejected !== 'function') {
    onRejected = function (error) { throw error }
  }

  const self = this

  return new MyPromise((resolve, reject) => {
    const resolvedCallback = () => {
      try {
        const result = onResolved(self.value);
        result instanceof MyPromise ? result.then(resolve, reject) : resolve(result)
      } catch (err) {
        reject(err)
      }
    }

    const rejectedCallback = () => {
      try {
        const result = onRejected(self.value);
        // 只要有 catch 后面就会变为 resolve
        result instanceof MyPromise ? result.then(resolve, reject) : resolve(result)
      } catch (err) {
        reject(err)
      }
    }

    // 还等待状态，将回调加入对应等待列表中
    if (self.status === PENDING) {
      self.resolvedCallbacks.push(resolvedCallback);
      self.rejectedCallbacks.push(rejectedCallback);
    } else if (self.status === RESOLVED) {
      resolvedCallback()
    } else if (self.status === REJECTED) {
      rejectedCallback()
    }
  })
}

MyPromise.prototype.catch = function (onRejected) {
  return MyPromise.prototype.then(undefined, onRejected)
}


MyPromise.all = function (args) {
  return new MyPromise((resolve, reject) => {
    const allResult = []
    let successCount = 0

    args.forEach((promise, index) => {
      // 等待全部执行 ok，则直接改变状态
      promise.then((result) => {
        allResult[index] = result
        successCount++

        if (successCount === args.length) {
          resolve(allResult)
        }
      }, reject)
    })
  })
}

MyPromise.race = function (args) {
  return new MyPromise((resolve, reject) => {
    args.forEach((promise) => {
      // 谁先到，则直接改变状态（利用 promise 只改变一次状态）
      promise.then(resolve, reject)
    })
  })
}

const promise = new MyPromise((resolve, reject) => {
  resolve(2)
  reject(1)
})

promise.then((result) => {
  console.log('result', result);
}, (error) => {
  console.log('error', error);
})
