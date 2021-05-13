const moment = require('moment')
const secret = require('./secret')
moment.locale("zh-cn")
module.exports = {
  '@vuepress/last-updated': {
    transformer: (timestamp) => moment(timestamp).format("LLLL")
  },
  '@vssue/vuepress-plugin-vssue': {
    // 设置 `platform` 而不是 `api`
    platform: 'github',

    // 其他的 Vssue 配置
    owner: 'aa1050532409',
    repo: 'MyBlog',
    clientId: secret.clientId,
    clientSecret: secret.clientSecret,
    autoCreateIssue: 'true',
  },
  '@vuepress/back-to-top': true,
}