const headConf = require('./config/headConf.js')
const pluginsConf = require('./config/pluginsConf.js')
const navConf = require('./config/navConf')
const sidebarConf = require('./config/sidebarConf')

module.exports = {
  title: "Monster Charment的博客",
  description: "Monster Charment的博客",
  head: headConf,
  plugins: pluginsConf,
  themeConfig: {
    logo: '/assets/img/home/homegif.gif',
    nav: navConf,
    sidebar: sidebarConf
  },
};