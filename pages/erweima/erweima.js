// pages/erweima/erweima.js

var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:'',
    mode:'scaleToFill'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  retrieve2Dcode: function (e) {
    var that = this
    app.retrieve2Dcode("12345678", "CREG", function (res) {
      that.setData({
        src: app.globalData.apiContextUrl + "/2_d_code/" + res.data.fileName + "/"
      });
    });

  },
  generate2Dcode: function (e) {
    var data = {
        wechatConf: {
          "path": "pages/My_management/My_management?index=678dd99"
        },
        objectId: "12345678",
        scene: "CREG",
        replace: true
      };
    var that = this;
    app.generate2DCode(data, function (res) {
      that.setData({
        src: app.globalData.apiContextUrl + "/2_d_code/" + res.data.fileName + "/"
      });
    });  
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})