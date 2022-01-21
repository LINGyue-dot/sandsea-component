# SandSea-Component





## 开始

* 文件结构和代码风格
* css 样式方案
* 打包
* 测试

### 

### 文件结构和代码风格





代码风格，使用自定义的代码风格，见 `.prettier.config.js` ，使用 `prettier` 进行自动 fix





### inline css VS css in js



本项目中使用 `sass/less` 解决

![image-20220116212527106](https://s2.loli.net/2022/01/16/MOsDK2JcVGTjoZv.png)



### sass

```
$
```







## Menu





#### Menu 的子元素只能为 MenuItem

为 MenuItem 设置 `displayName` ，后在 Menu 中利用 `React.Children.map` 遍历子元素，并判断其 `displayName` 是否为 MenuItem



#### MenuItem 自生成 index

利用 `React.cloneElement` 进行浅拷贝，并将 `index` 添加到 props 上



