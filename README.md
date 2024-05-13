# DNUI_Map
DNUI校园微导航
![74345f1870588f8258eeac098e8ada0](https://github.com/youranis/DNUI_Map/assets/88256681/6264bf3b-63ea-42c9-be7d-bccc817fae62)

#原作者主页
https://space.bilibili.com/384844986
这个微信小程序大致结构包括前端页面布局和后端数据库调用两个主要部分。

### 前端页面布局：
1. **WXML文件**（*.wxml）：WXML是类似HTML的标记语言，用于描述页面结构。在学校部分的WXML文件中，使用了`<scroll-view>`标签实现滚动视图，包含一个`.cu-list`类的列表，其中每个列表项使用`.cu-item`类定义。通过`wx:for`指令遍历`allWords`数组，生成多个列表项。每个列表项包含了展示标题和点击跳转事件的组件。

2. **WXSS文件**（*.wxss）：WXSS用于定义页面样式。在学校部分的WXSS文件中，设置了整个页面的背景颜色、列表样式、列表项样式等。通过样式定义，美化了页面的外观，包括背景颜色、边距、圆角等。

### 后端数据库调用：
1. **JavaScript文件**（*.js）：JavaScript文件包含了页面逻辑和数据处理部分。在学校部分的JavaScript文件中，通过`require`关键字引入了`school`和`media`模块，这些模块可能包含了学校相关的数据和媒体资源。在`onLoad`生命周期函数中，可能进行了一些初始化操作，比如设置页面数据。另外，定义了一个`jump`函数，用于处理点击事件，获取点击项的ID，并跳转到相应的页面。

### 总结：
前端页面布局通过WXML和WXSS实现了页面结构和样式的定义，使得用户能够直观地浏览和操作页面。后端数据库调用部分则通过JavaScript实现了页面的逻辑处理和数据管理，保证了页面功能的正常运行和数据的有效传输。整体上，前端和后端的配合使得微信小程序能够完整地实现了学校部分的功能需求。



在微信小程序的云开发过程中，使用云数据库是一种常见的数据存储和管理方式。以下是详细介绍微信小程序云开发中云数据库的调用过程：

### 1. 开通云开发
首先，你需要在微信开发者工具中开通云开发服务。在小程序管理后台中选择对应的小程序项目，进入云开发页面，按照提示完成开通云开发服务的操作。

### 2. 初始化云开发环境
在小程序的入口文件（如app.js）中进行云开发环境的初始化。你需要调用`wx.cloud.init()`方法，并传入相应的配置参数，包括环境ID等。

```javascript
// app.js
App({
  onLaunch: function () {
    // 初始化云开发环境
    wx.cloud.init({
      env: 'your-environment-id',
      traceUser: true,
    })
  }
})
```

### 3. 数据库操作
一旦云开发环境初始化完成，你就可以在小程序中通过调用云开发提供的API来操作云数据库。常见的操作包括：

- **添加数据**：使用`db.collection('collectionName').add()`方法向指定的集合中添加数据。
- **查询数据**：使用`db.collection('collectionName').where().get()`方法查询符合条件的数据。
- **更新数据**：使用`db.collection('collectionName').doc('docId').update()`方法更新指定文档的数据。
- **删除数据**：使用`db.collection('collectionName').doc('docId').remove()`方法删除指定文档的数据。

在你的小程序代码中，你可以根据需要调用这些方法来对云数据库进行增删改查的操作。例如，如果你需要在页面加载时从数据库中获取数据，可以在页面的`onLoad`生命周期函数中调用查询方法，并将查询结果展示在页面上。

### 4. 安全设置与权限控制
在使用云数据库时，需要注意安全设置与权限控制。你可以在小程序管理后台的云开发控制台中设置数据库的权限，包括读写权限、集合级权限等，以确保数据的安全性和隐私保护。

### 5. 实时数据同步
微信小程序的云开发还提供了实时数据同步功能，即当数据库中的数据发生变化时，小程序可以实时收到变更通知并更新页面数据。这一功能可以通过监听数据库的变更事件来实现，具体可以参考云开发文档中的相关说明。

通过以上步骤，你可以在微信小程序中使用云开发的云数据库功能，实现数据的存储、管理和实时同步，为小程序提供强大的数据支持。

## 原奇洞喵念科技发展有限公司

<img src="https://github.com/youranis/DNUI_Map/assets/88256681/a15b93da-b65c-44bc-bedd-dea1dcfb4e75" width="300">

**协作企业**  
负责线上推广，合作开发和鸿蒙生态app开发。

**UI设计**  
Belawumia

**相关主页**  
- [gio.kami.su](http://gio.kami.su)
- [gio.kami.su/litematerials](http://gio.kami.su/litematerials)
- [paletakuolie.kami.su](http://paletakuolie.kami.su)

## 昌江区智革科技中心

<img src="https://github.com/youranis/DNUI_Map/assets/88256681/d73a9008-e717-48ab-b9e9-82e158df4202" width="300">

**协作企业**  
负责 AI 模块算法接口部分开发（企业备案）。

已经实现web端接口
http://vps1.subei.cloud:45000/


