/**
 * 发布订阅模式
 * 由统一调度中心调用，发布者和订阅者不需要知道彼此的存在
 */
class PubSub {
  constructor() {
    this.eventHub = {};
  }

  addSub(type, sub) {
    this.eventHub[type] = this.eventHub[type] || [];
    this.eventHub[type].push(sub);
  }

  notify(type, ...args) {
    const subs = this.eventHub[type];
    subs && subs.forEach((sub) => sub(...args));
  }
}

// test

const ps = new PubSub()

ps.addSub('message', console.log)
ps.notify('message', 'abc', 'cba')
