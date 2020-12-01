module.exports = [
  {text: '首页', link: '/'},
  {
    text: '前端',
    link: '/web/',  //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        text: '学习笔记', 
        items:
        [
          {text: 'TypeScript笔记', link: '/javascript/'},
          {text: 'ES6笔记', link: '/es6/'},
          {text: 'Vue笔记', link: '/vue/'}
        ]}
    ]
  },
  {
    text: '页面',
    link: '/ui/',
    // items: [
    //   {text: 'HTML', link: '/p/8309a5b876fc95e3/'},
    //   {text: 'CSS', link: '/p/0a83b083bdf257cb/'},
    // ]
  },
  {
    text: '技术',
    link: '/technology/',
    // items: [ // 这些link是在相应md文件定义的永久链接。另外，注意结尾是有斜杠的
    //   {text: '技术文档', link: '/p/9a7ee40fc232253e/'},
    // ]
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      // {text: '学习', link: '/p/f2a556/'},
      // {text: '面试', link: '/p/aea6571b7a8bae86/'},
      // { text: '心情杂货', link: '/p/2d615df9a36a98ed/' },
      // { text: '实用技巧', link: '/p/baaa02/' },
      {text: '友情链接', link: '/friends/'},
    ]
  },
  {text: '关于', link: '/about/'},
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
