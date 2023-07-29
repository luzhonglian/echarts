# Echarts 项目-产品销售库存可视化

## 目录

- [项目在线展示](#show)
- [关于](#about)
- [项目运行准备](#getting_started)
- [项目运行](#usage)
- [自适应的实现](#resize)
- [开发中遇到的 bug 以及解决方案](#bug)

## 项目在线展示 <a name = "show"></a>
https://luzhonglian.github.io/echarts/
## 关于 <a name = "about"></a>

Vite+Vue3.2+setup 语法糖编写 <br>
该项目为前端页面，后台数据在 fastmock 上布置

## 项目运行准备 <a name = "getting_started"></a>

### 安装 node 和 npm


## 项目运行 <a name = "usage"></a>

```
npm install
npm run dev
```

## 自适应的实现 <a name = "resize"></a>

lib-flexible 将页面宽度 20 等分为 rem，元素单位一律使用 rem <br>
监听 window 的 resize 事件以触发 echarts 实例的 resize 事件

## 开发中遇到的 bug 以及解决方案 <a name = "bug"></a>

**-浏览器缩小时两边的图例的宽度在一定大小后不变并挤压中间图例的宽度** <br><br>
BUG 原因：Echarts 对 flex 并不能完美地支持<br>
解决方案：给图例按 flex 比例设置一个 min-width

**-拖边框缩小放大浏览器能触发 resize，但浏览器向下还原以及最大化后不触发** <br><br>
BUG 原因:lib-flexible 的 flexible.js 中有以下代码：

```
    win.addEventListener('resize', function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, true);
```

窗口 resize0.3s 后才触发 rem 的更新，在rem更新前echart图表的resize是无效的 <br><br>
解决方案：监听 window 的 resize 事件，设置定时器，超过0.3s rem更新后触发图例的resize 事件

```
  window.addEventListener("resize", () => {
    clearTimeout(t);
    t = setTimeout(() => {
      echartsInstance.resize();
    }, 301);
  });
```


