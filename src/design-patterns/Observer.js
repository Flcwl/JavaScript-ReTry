/**
 * 观察者模式
 * 由具体目标调度，订阅者和发布者存在依赖关系
 */
class Dispatcher {
  constructor() {
    this.subs = [];
  }

  addSub(sub) {
    if (sub && sub.update) {
      this.subs.push(sub);
    }
  }

  notify(...args) {
    this.subs.forEach((sub) => {
      sub.update(...args);
    });
  }
}

class Watcher {
  constructor(cb) {
    this.cb = cb;
  }

  update(...args) {
    this.cb(...args);
  }
}

// test

const dispatcher = new Dispatcher()
const watcher = new Watcher(console.log)

dispatcher.addSub(watcher)
dispatcher.notify('abc', 'cba')
