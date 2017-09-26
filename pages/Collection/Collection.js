Page({

  /**
   * 页面的初始数据
   */
  data: {
    Collection: [{ name: '问题一', content: '由各种物质组成的巨型球状天体，叫做星球。有一定的形状，有自己的运行轨道。' }, { name: '问题二', content: '由各种物质组成的巨型球状天体，叫做星球。有一定的形状，有自己的运行轨道。' },
    { name: '问题三', content: '由各种物质组成的巨型球状天体，叫做星球。有一定的形状，有自己的运行轨道。' }]
  },
  jumpToCollection: function () {
    wx.navigateTo({
      url: "../Collection/Collection",
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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