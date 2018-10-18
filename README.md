# cnode


# 安装依赖
npm install

# 运行在localhost:8080上
npm run dev

# 运行该命令在dist文件下的HTML上查看页面
npm run build

# 预览链接
  ## https://xcc99.github.io/CNode/dist/#/
# 使用技术

### 页面
- div+css布局
- 使用媒体查询进行响应式布局


### js
- Vue：用于构建用户界面的 MVVM 框架。它的核心是响应的数据绑定和组系统件
- vue-cli 搭建脚手架工具
- vue-router：为单页面应用提供的路由系统
- axios：获取数据，动态获取实时数据
- jQuery：引入jQuery更加便捷的实现对页面元素的选择和使用

 # 主要功能
 ###  Header组件为头部，每个页面都会展示，点击主页可以切换回PostList组件页面
 ### 主页是PostList，展示20条内容，内容包括作者的头像和文章标题，最后一次回复时间，分类以及收藏和评论次数。点击头像和标题可以分别跳转至作者主页（UserInfo组件）和文章内容（Article和SildeBar组件），获取的时间通过filter过滤格式进行展示。底部插入Pagination组负责页面展示内容的切换
 ### 文章正文包括Article和SildeBar，评论区点击用户像可以跳转到用户个人中心（UserInfo组件），slidebar上的作者头像和文章标题也分别可以跳转到用户组件（UserInfo组件）和文章内容（Article和SildeBar组件）

 
