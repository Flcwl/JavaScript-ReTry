/**
 * 发布订阅模式
 * 由统一调度中心调用，发布者和订阅者不需要知道彼此的存在
 */
class PubSub {
  constructor() {
    this.eventHub = {};
  }

  /**
   *  添加订阅
   * @param {string} type 订阅类型
   * @param {*} handler 回调
   */
  addListener(type, handler) {
    this.eventHub[type] = this.eventHub[type] || [];
    this.eventHub[type].push(handler);
  }

  /**
   * 发布
   * @param {*} type 发布类型
   * @param  {...any} args 发布的内容
   */
  dispatch(type, ...args) {
    const handlers = this.eventHub[type];
    handlers && handlers.forEach((sub) => sub(...args));
  }

  /**
   * 移除订阅
   * @param {*} type
   * @param {*} handler
   */
  removeListener(type, handler)  {
    if (!handler) {
      // 移除整个类型订阅
      delete this.eventHub[type]
    } else {
      // 只移除对应事件回调
      const handlers = this.eventHub[type].filter((item) => handler !== item)

      if (handlers.length === 0) {
        delete this.eventHub[type]
      } else {
        this.eventHub[type] = handlers
      }
    }
  }
}

// test

const ps = new PubSub()

ps.addListener('message', (...args) => {
  console.log('收到发布内容：', args)
})
ps.addListener('message', console.log)

ps.dispatch('message', 'abc')

ps.removeListener('message', console.log)

ps.dispatch('message', 'def')

