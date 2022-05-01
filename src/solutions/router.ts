/**
 * 简单 hash 路由
 */
export class Router {
  private routes: Record<string, any>
  private currentHash: string

  constructor() {
    // 当前路由
    this.currentHash = ''
    // 路由表
    this.routes = {}
    window.addEventListener('load', this.freshRoute, false)
    window.addEventListener('hashchange', this.freshRoute, false)
  }

  freshRoute = () => {
    this.currentHash = location.hash.slice(1) || '/'
    this.routes[this.currentHash]()
  }

  configRoute = (config: any[]) => {
    config.forEach(({ path, callback }) => {
      this.routes[path] = callback
    })
  }
}
