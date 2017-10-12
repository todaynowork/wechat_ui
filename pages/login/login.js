var app = getApp()
Page({
  onLoad: function () {
    this.setData({
      hasLogin: app.globalData.hasLogin
    });
  },
  data: {},
  login: function () {
    
    var that = this
    wx.login({
      success: function (res) {
        app.globalData.hasLogin = true;
        that.setData({
          hasLogin: true
        });
        that.update();
    wx.reLaunch({
      url: "../My_management/My_management"
    });

      }
    })
  }
})
