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
    radioItems: [
      {name: 'USA', value: '美国'},
      {name: 'CHN', value: '中国'}
    ],
    hidden: false
  },
  checkboxChange: function (e) {
    var checked = e.detail.value
    var changed = {}
    for (var i = 0; i < this.data.checkboxItems.length; i++) {
      if (checked.indexOf(this.data.checkboxItems[i].name) !== -1) {
        changed['checkboxItems[' + i + '].checked'] = true
      } else {
        changed['checkboxItems[' + i + '].checked'] = false
      }
    }
    this.setData(changed)
  },
  radioChange: function (e) {
    var checked = e.detail.value
    var changed = {}
    for (var i = 0; i < this.data.radioItems.length; i ++) {
      if (checked.indexOf(this.data.radioItems[i].name) !== -1) {
        changed['radioItems[' + i + '].checked'] = true
      } else {
        changed['radioItems[' + i + '].checked'] = false
      }
    }
    this.setData(changed)
  },
  tapEvent: function (e) {
    console.log('按钮被点击')
  }
})
