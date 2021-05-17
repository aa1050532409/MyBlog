const headConf = require('./config/headConf.js')
const pluginsConf = require('./config/pluginsConf.js')
const navConf = require('./config/navConf')
const sidebarConf = require('./config/sidebarConf')

module.exports = {
  title: "Monster Charment的博客",
  description: "欢迎欢迎~~~",
  head: headConf,
  plugins: pluginsConf,
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    author: 'Monster Charment',
    authorAvatar: '/avatar.jpg',
    logo: '/assets/img/home/homegif.gif',
    nav: navConf,
    sidebar: sidebarConf,
    noFoundPageByTencent: false,
    lastUpdated: '更新时间'
  },
};