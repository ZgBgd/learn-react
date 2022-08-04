# Getting Started learn React sourceCode
#### 准备工作
[我是如何阅读源码的](https://juejin.cn/post/6903335881227108366)

[react 下载地址](https://unpkg.com/react@18.2.0/umd/react.development.js)

[react-dom 下载地址](https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js)
> 配置可以参照文章中的，只是下载的文件还是走上面链接的去下载

#### 从入口开始
###### createRoot
```javascript
function createRoot(container, options) {
	// container 根节点容器
    // options 配置 默认undefined
   //const root = ReactDOM.createRoot(document.getElementById('root'));
}
```

###### 如何优雅的调试react源码
###### react.js.map react-dom.js.map
map文件生成 (看文章)[https://juejin.cn/post/7126501202866470949#heading-0]
注意点：需要修改bulder.js文件。因为有的不支持生成sourceMap会报错，所以只生成react和react-dom即可。
