module.exports = [
  { text: '主页', icon:'reco-home', link: '/' },
  {
    text: '分类', icon:'reco-category',
    items: [
      { text: 'CSS', link: '/'},
      { text: 'JavaScript', link: '/'},
      { text: 'Vue', link: '/'}
    ]
  },
  { text: '时间线', icon:'reco-date', link: '/'},
  {
    text: '项目', icon:'reco-menu',
    items: [
      { text: '暂无~', link: '/'},
    ]
  },
  {
    text: '工具', icon:'reco-tag',
    items: [
      { text: 'git的使用', link: '/blogs/git/git.html'},
      { text: 'github', link: '/'}
    ]
  },
  {
    text: '关于', icon:'reco-account',
    items: [
      { text: '关于我', link: '/about/about.html' },
      { text: '关于博客', link: '/'}
    ]
  },
  { text: '留言', icon:'reco-message', link: '/message.html' },
  {
    text: 'github', icon:'reco-github',
    items: [
      { text:'我的github',link:'https://github.com/aa1050532409' }
    ]
  },
]