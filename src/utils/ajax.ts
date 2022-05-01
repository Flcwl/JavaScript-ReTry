/**
 * ajax 原生请求封装
 */
export function ajax({ url, method = 'GET' }: any) {
  return new Promise((resolve, reject) => {
    // 1. 新建请求
    const xhr = new XMLHttpRequest();

    // 2. 状态监听
    xhr.onreadystatechange = function() {
      // `4` 表示 DONE
      if (this.readyState !== 4) return;

      // 请求成功失败处理
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    xhr.onerror = function() {
      reject(new Error(this.statusText));
    };

    // 3. 设置请求头
    xhr.open(method, url, true);
    xhr.responseType = "json";
    xhr.setRequestHeader("Accept", "application/json");

    // 4. 发送请求
    xhr.send(null);
  });
}
