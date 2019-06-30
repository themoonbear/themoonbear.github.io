// .vuepress/config.js

module.exports = {
    // 网站 Title
    title: 'Moonbear Studio',
  
    // 网站描述
    description: 'Moonbear Studio - Game Developer',
  
    // 网站语言
    locales: {
      '/': {
        lang: 'zh-CN',
      },
    },
    //插件
    plugins: [
      [ 
        '@vuepress/google-analytics',
        {
          'ga': 'UA-37215193-2'
        }
      ]  
    ],
    // 使用的主题
    theme: 'meteorlxy',
  
    // 主题配置
    themeConfig: {     
      // 主题语言，参考下方 [主题语言] 章节
      // lang: require('vuepress-theme-meteorlxy/lib/langs/zh-CN'),

      // comments: false,      
  
      // 个人信息（没有或不想设置的，删掉对应字段即可）
      personalInfo: {
        // 昵称
        nickname: 'Moonbear Studio',
  
        // 个人简介
        description: 'Game Developer',
  
        // 电子邮箱
        email: 'contact@moonbear.cn',
  
        // 所在地
        location: 'Beijing-China',
  
        // 组织
        // organization: 'Moonbear Studio',
  
        // 头像
        // 设置为外部链接
        // 或者放置在 .vuepress/public 文件夹，例如 .vuepress/public/img/avatar.jpg
        avatar: '/assets/img/avatar.jpg',
        
  
        // 社交平台帐号信息
        sns: {
          // Github 帐号和链接
          github: {
            account: 'themoonbear',
            link: 'https://github.com/themoonbear',
          },
  
          // Facebook 帐号和链接
          // facebook: {
          //   account: 'lostwho',
          //   link: 'https://www.facebook.com/lostwho',
          // },
  
          // LinkedIn 帐号和链接
          // linkedin: {
          //   account: 'meteorlxy',
          //   link: 'http://www.linkedin.com/in/meteorlxy',
          // },
  
          // Twitter 帐号和链接
          // twitter: {
          //   account: 'meteorlxy_cn',
          //   link: 'https://twitter.com/meteorlxy_cn',
          // },
  
          // 新浪微博 帐号和链接
          // weibo: {
          //   account: '@焦炭君_Meteor',
          //   link: 'https://weibo.com/u/2039655434',
          // },
  
          // 知乎 帐号和链接
          // zhihu: {
          //   account: 'meteorlxy.cn',
          //   link: 'https://www.zhihu.com/people/meteorlxy.cn',
          // },
  
          // 豆瓣 帐号和链接
          // douban: {
          //   account: '159342708',
          //   link: 'https://www.douban.com/people/159342708',
          // },
  
          // Reddit 帐号和链接
          // reddit: {
          //   account: 'meteorlxy',
          //   link: 'https://www.reddit.com/user/meteorlxy',
          // },
  
          // Medium 帐号和链接
          // medium: {
          //   account: 'meteorlxy.cn',
          //   link: 'https://medium.com/@meteorlxy.cn',
          // },
  
          // Instagram 帐号和链接
          // instagram: {
          //   account: 'meteorlxy.cn',
          //   link: 'https://www.instagram.com/meteorlxy.cn',
          // },
  
          // GitLab 帐号和链接
          // gitlab: {
          //   account: 'meteorlxy',
          //   link: 'https://gitlab.com/meteorlxy',
          // },
  
          // Bitbucket 帐号和链接
          // bitbucket: {
          //   account: 'meteorlxy',
          //   link: 'https://bitbucket.org/meteorlxy',
          // },
  
          // Docker Hub 帐号和链接
          // docker: {
          //   account: 'meteorlxy',
          //   link: 'https://hub.docker.com/u/meteorlxy',
          // },
        },
      },
  
      // 上方 header 的相关设置
      header: {
        // header 的背景，可以使用图片，或者随机变化的图案（geopattern）
        background: {
          // 使用图片的 URL，如果设置了图片 URL，则不会生成随机变化的图案，下面的 useGeo 将失效
          // url: '/assets/img/bg.jpg',
  
          // 使用随机变化的图案，如果设置为 false，且没有设置图片 URL，将显示为空白背景
          useGeo: true,
        },
  
        // 是否在 header 显示标题
        showTitle: true,
      },
  
      // 是否显示文章的最近更新时间
      lastUpdated: true,
  
      // 顶部导航栏内容
      nav: [
        { text: 'Home', link: '/', exact: true },
        { text: 'Game', link: '/posts/', exact: false },
        { text: 'Services', link: '/other/services.html'},
        { text: 'Terms of Service', link: '/other/terms_of_service.html'},
        { text: 'Privacy Policy', link: '/other/privacy_policy.html'}
      ],
      // 评论配置，参考下方 [页面评论] 章节
      comments: {
        owner: 'themoonbear',
        repo: 'www',
        clientId: 'deda96b10a50fd36574a',
        clientSecret: '907a4fb9fdabef212e2f3ec3b14fe94856cd185e',
        autoCreateIssue: process.env.NODE_ENV !== 'development',
      },      
    },
  }