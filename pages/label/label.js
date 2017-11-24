var app = getApp()
Page({
  onLoad: function () {
    let favoriteReqConf = {
      // url: '/loginPostTest',
      data: {},
      success: function (res) {
        if (res.data.errcode) {
          console.log(res.data);
        } else {
          //get customize user info, image
          console.log(res.data);
          //return sample [{"id":5,"description":"前段技术","iconurl":"../../image/css_uncheck@1x.png"},{"id":6,"description":"Java开发","iconurl":"../../image/java_uncheck@1x.png"},{"id":7,"description":"后台开发","iconurl":"../../image/mysql_uncheck@1x.png"},{"id":8,"description":"Cloud","iconurl":"../../image/cloud_uncheck@1x.png"},{"id":9,"description":"服务器","iconurl":"../../image/computer_uncheck@1x.png"},{"id":10,"description":"Agile","iconurl":"../../image/agile_uncheck@1x.png"}]
        }
      },
      method: 'GET'
    };
    app.wxRequest("/favorite/all", favoriteReqConf);
  },
  data: {
    contentItems: [
      { name: '../../image/css_uncheck@1x.png', value: '前段技术'},
      { name: '../../image/java_uncheck@1x.png', value: 'Java开发'},
      { name: '../../image/mysql_uncheck@1x.png', value: '后台开发' },
      { name: '../../image/cloud_uncheck@1x.png', value: 'Cloud' },
      { name: '../../image/computer_uncheck@1x.png', value: '服务器' },
      { name: '../../image/agile_uncheck@1x.png', value: 'Agile' }
    ],
    hiddenModal: true
  },
  listenerButton: function () {
    this.setData({
      hiddenModal: !this.data.hiddenModal
    })
  },

  listenerConfirm: function () {
    this.setData({
      hiddenModal: true
    })
  },

  listenerCancel: function () {
    this.setData({
      hiddenModal: true
    })
  },
})
