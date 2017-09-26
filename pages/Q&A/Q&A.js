// pages/Q&A/Q&A.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    questionContent:'为什么老板总让我买果汁？',
    answerCounts:'3',
    date:'2017-09-10',
    userInfo: {},
    primarySize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    hidden:true,
    value:"",
  },

  /**
   * button监听事件
   */
  clickButton: function() {
    this.setData({
      hidden:false
    })
  },

  answerInput:function(e){
    this.setData({
      value:e.detail.value,
    })
  },
  /**
   * 提交 监听事件
   */
  confirm: function () {
    wx.navigateTo({
      url: '../Q&A/Q&A',
    })
   
    
  },   
  /**
   * cancel 监听事件
   */
  cancel: function () {
    wx.navigateTo({
      url: '../Q&A/Q&A',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
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