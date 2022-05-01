/**
 * 实现 jsonp
 */
export const jsonp = ({ url, params, callbackParamName, timeout }: any) => {
  return new Promise((resolve, reject) => {
    const callbackFuncName =  `jsonp_${Date.now()}_${Math.ceil(Math.random() * 100000)}`
    const scriptId = `${callbackParamName}_${callbackFuncName}`

    let timeoutId: number

    // 注册 jsonp callback
    // @ts-ignore
    window[callbackFuncName] = (response: any) => {
      resolve({
        ok: true,
        // keep consistent with fetch API
        json: () => Promise.resolve(response),
      })

      window.clearTimeout(timeoutId)

      clearFunction(callbackFuncName)
      removeScript(scriptId)
    }

    // 创建 jsonp 发送脚本
    const src = url + (url.indexOf('?') === -1 ? '?' : '&') +
      `${callbackFuncName}=${callbackFuncName}` +
      (new URLSearchParams(params)).toString()

    const jsonpScript = createScript(src, scriptId)
    // 发送jsonp
    addScript(jsonpScript)

    // 超时取消
    timeoutId = window.setTimeout(() => {
      reject(new Error(`JSONP request to ${url} timed out`))

      removeScript(scriptId)

      // 超时后响应到达处理：清理自己
      // @ts-ignore
      window[callbackFuncName] = () => clearFunction(callbackFuncName)
    }, timeout)

    // Caught if got 404/500
    jsonpScript.onerror = () => {
      reject(new Error(`JSONP request to ${url} failed`))

      window.clearTimeout(timeoutId)

      clearFunction(callbackFuncName)
      removeScript(scriptId)
    }
  })
}

const createScript = (src: string, id: string) => {
  const script = document.createElement('script');
  script.src = src;
  script.type = 'text/javascript';
  script.id = id
  return script;
}

const addScript = (script: HTMLScriptElement) => {
  document.getElementsByTagName('head')[0]?.appendChild(script)
}

const removeScript = (scriptId: string) => {
  const script = document.getElementById(scriptId)

  if (script) {
    document.getElementsByTagName('head')[0]?.removeChild(script)
  }
}

const clearFunction = (functionName: string) => {
  try {
    // @ts-ignore
    delete window[functionName]
  } catch (e) {
    // @ts-ignore
    window[functionName] = undefined
  }
}
