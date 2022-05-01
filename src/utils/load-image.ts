/**
 * 异步加载图片资源
 * @param url
 */
export const loadImage = (url: string) => {
  return new Promise((resolve,reject)=>{
    const img = new Image();
    img.src = url;
    img.onload = () => {
      console.log(`图片请求成功，此处进行通用操作`);
      resolve(img);
    }
    img.onerror = (err) => {
      console.log(`失败，此处进行失败的通用操作`);
      reject(err);
    }
  })
}

loadImage("url").then(()=>{
  console.log("加载成功");
}).catch((error)=>{
  console.log("加载失败");
})
