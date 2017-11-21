Page({
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
