const moment = require('moment')
module.exports = {
  title: "Monster Charment的博客",
  description: "Monster Charment的博客",
  head: [
    ['meta',{name:'author',content:'Monster Charment'}],
    ['meta',{name:'keywords',content:'Monster Charment的博客'}],
  ],
  plugins: {
    '@vuepress/last-updated': {
      transformer: (timestamp) => moment(timestamp).format("LLLL")
    },
    '@vssue/vuepress-plugin-vssue': {
      // 设置 `platform` 而不是 `api`
      platform: 'github',

      // 其他的 Vssue 配置
      owner: 'aa1050532409',
      repo: 'MyBlog',
      clientId: 'd193698eb7f1988fc914',
      clientSecret: 'c117b98f608e9d11e2afd151842c34f3fcad060e',
      autoCreateIssue: 'true',
    },
  },
  themeConfig: {
    logo: '/assets/img/home/homegif.gif',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'About', link: '/about.html' },
      { text: '留言', link: '/message.html' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ],
    sidebar: {
      "/css/": [
        'c-aaa',
        'c-bbb',
        'c-ccc',
      ],
      "/javascript/": [
        'j-aaa',
        'j-bbb',
        'j-ccc',
      ],
    }
  },
};