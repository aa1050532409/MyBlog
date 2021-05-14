const moment = require('moment')
const secret = require('./secret')
moment.locale("zh-cn")
module.exports = [
  [
    '@vuepress/last-updated',{
    transformer: (timestamp) => moment(timestamp).format("LLLL")
    }
  ],
  [
    '@vssue/vuepress-plugin-vssue',{
    // 设置 `platform` 而不是 `api`
    platform: 'github',

    // 其他的 Vssue 配置
    owner: 'aa1050532409',
    repo: 'MyBlog',
    clientId: secret.clientId,
    clientSecret: secret.clientSecret,
    autoCreateIssue: 'true',
    }
  ],
  ['@vuepress/back-to-top'],
  [
    'dynamic-title',{
      showIcon: "/favicon.ico",
      showText: "(/≧▽≦/)咦！又好了！",
      hideIcon: "/failure.ico",
      hideText: "(●—●)喔哟，崩溃啦！",
      recoverTime: 2000
    }
  ],
  [
    'vuepress-plugin-nuggets-style-copy',{
      copyText: "复制代码",
      tip: {
        content: "复制成功!"
      }
    }
  ],
  [
    'meting', {
      //metingApi,
      //配置后全局播放
      meting: {
        // 网易
        server: "netease",
        // 读取歌单
        type: "playlist",
        mid: "696441716",
      },
      aplayer: {
        // 吸底模式
        fixed: false,
        mini: true,
        // 自动播放
        autoplay: true,
        //初始循环模式
        loop: 'all',
        // 歌曲栏折叠
        listFolded:true,
        // 颜色
        theme: '#f9bcdd',
        // 播放顺序为随机
        order: 'list',
        //预加载模式
        preload: 'auto',
        // 初始音量
        volume: 0.1,
        // 关闭歌词显示
        lrcType: 0.
      },
      mobile: {
        // 手机端去掉cover图
        cover: false,
      },
    }
  ],
]