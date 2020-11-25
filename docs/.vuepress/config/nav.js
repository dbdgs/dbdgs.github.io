module.exports = [
  {text: '首页', link: '/'},
  {
    text: '前端',
    link: '/web/',  //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {text: '前端文章', items: [
        {text: 'JavaScript', link: '/p/8143cc480faf9a11/'}, // 这些link是在相应md文件定义的永久链接。另外，注意结尾是有斜杠的
        {text: 'Vue', link: '/p/802a1ca6f7b71c59/'},
      ]},
      {text: '学习笔记', items:[
        {text: '《JavaScript教程》笔记', link: '/note/javascript/'},
        {text: '《JavaScript高级程序设计》笔记', link: '/note/js/'},
        {text: '《ES6 教程》笔记', link: '/note/es6/'},
        {text: '《Vue》笔记', link: '/note/vue/'},
        {text: '《TypeScript 从零实现 axios》', link: '/note/typescript-axios/'},
        {text: '《Git》学习笔记', link: '/note/git/'},
      ]}
    ]
  },
  {
    text: '页面',
    link: '/ui/',
    items: [
      {text: 'HTML', link: '/p/8309a5b876fc95e3/'},
      {text: 'CSS', link: '/p/0a83b083bdf257cb/'},
    ]
  },
  {
    text: '技术',
    link: '/technology/',
    items: [
      {text: '技术文档', link: '/p/9a7ee40fc232253e/'},
      {text: 'GitHub技巧', link: '/p/4c778760be26d8b3/'},
      {text: 'Nodejs', link: '/p/117708e0af7f0bd9/'},
      {text: '博客搭建', link: '/p/41f87d890d0a02af/'},
    ]
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      {text: '学习', link: '/p/f2a556/'},
      {text: '面试', link: '/p/aea6571b7a8bae86/'},
      { text: '心情杂货', link: '/p/2d615df9a36a98ed/' },
      { text: '实用技巧', link: '/p/baaa02/' },
      {text: '友情链接', link: '/friends/'},
    ]
  },
  {text: '关于', link: '/about/'},
  {
    text: '收藏',
    link: '/p/beb6c0bd8a66cea6/',
    items: [
      {text: '网站', link: '/p/beb6c0bd8a66cea6/'},
      {text: '资源', link: '/p/eee83a9211a70f9d/'},
      {text: 'Vue资源', link: '/p/12df8ace52d493f6/'},
    ]
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      {text: '分类', link: '/categories/'},
      {text: '标签', link: '/tags/'},
      {text: '归档', link: '/archives/'},
    ]
  }
]
