const headConf = require('./config/headConf')
const navConf = require('./config/navConf')
const sidebarConf = require('./config/sidebarConf')

module.exports = {
  "base": "/vuepress-blog/",
  "title": "Jade",
  "description": "A blog&docs website base on vuepress framework",
  // "dest": "dist",
  "head": headConf,
  "theme": "reco",
  "themeConfig": {
    "nav": navConf,
    "sidebar": sidebarConf,
    "subSidebar": "auto",
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "blog",
        "icon": 'reco-blog'
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    // "keyPage": {
    //   "keys": ['56521b4d2824c0cb09bb240f8461acad'],
    //   "color": "#42b983",
    //   "lineColor": "#42b983"
    // },
    // "friendLink": [
    //   {
    //     "title": "午后南杂",
    //     "desc": "Enjoy when you can, and endure when you must.",
    //     "email": "1156743527@qq.com",
    //     "link": "https://www.recoluan.com"
    //   },
    //   {
    //     "title": "vuepress-theme-reco",
    //     "desc": "A simple and beautiful vuepress Blog & Doc theme.",
    //     "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
    //     "link": "https://vuepress-theme-reco.recoluan.com"
    //   }
    // ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Jade",
    "authorAvatar": "/logo.png",
    // "record": "xxxx",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  }
}