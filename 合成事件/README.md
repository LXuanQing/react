# vc-demo [![][tnpm-image]][tnpm-url]

Demo Component for VisualEngine & RenderEngine

## 组件介绍

> todo: 组件介绍，文字或预览图

## 端适配

![](https://st.onbing.com/?t=Mobile&c=green) ![](https://st.onbing.com/?t=PC&c=red)

## 设计文档

> todo: 添加设计文档 

## 属性介绍

属性 | 类型 | 默认值| 描述
---- | ---- | ----- | ----

> todo: 添加属性介绍

## 组件开发

[组件的开发文档和规范](https://lark.alipay.com/vision/docs/dev)

### 目录结构

```
├── package.json
├── build                   编译输出目录
└── src                     源代码
    ├── logo.svg            VE 设计器中显示的logo
    ├── prototype.js        VE 配置文件
    ├── prototypeView.js    VE 视图文件
    ├── view.js             RE 视图文件，PC 端
    ├── view.less           RE 视图样式文件，PC 端
    ├── view.mobile.js      RE 视图文件，Mobile 端，可选
    └── view.mobile.less    RE 视图样式文件，Mobile 端，可选
```

### 环境准备

**安装 visualengine-devtools**

```sh
tnpm install -g @ali/visualengine-devtools
```

> 详细文档 <https://gitlab.alibaba-inc.com/vision/visualengine-devtools>

### 常用命令

**首次检出项目**

```sh
tnpm install
```

**拉取项目更新之后**

```sh
tnpm update
```

**启动调试服务器**

```sh
npm start
```

**构建输出**

```sh
npm run build
 
or

vdev build
```

**发布**

```sh
tnpm publish

# or

vdev publish
```

[tnpm-image]: https://web.npm.alibaba-inc.com/badge/v/@ali/vc-demo.svg?style=flat-square
[tnpm-url]: https://web.npm.alibaba-inc.com/package/@ali/vc-demo
