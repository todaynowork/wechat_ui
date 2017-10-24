Page({
  data: {
    section: [{ name: '小宋佳', Integral: '3000' }]
  },
  jumpToHistory: function () {
    wx.navigateTo({
      url: "../History/History"
    });
  },
  jumpToCollection: function () {
    wx.navigateTo({
      url: "../Collection/Collection"
    });
  },
  jumpToRequest: function () {
    wx.navigateTo({
      url: "../Request/Request"
    });
  },
  jumpToAnswer: function () {
    wx.navigateTo({
      url: "../Answer/Answer"
    });
  },
});