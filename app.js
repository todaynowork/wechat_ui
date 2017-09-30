//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    var that = this;
    wx.login({
      success: function (res) {
        if (res.code) {
          //发起网络请求
          let openIdReqConf = {
            url: '/loginPost',
            data: {
              code: res.code
            },
            success: function (res) {
              
              if (res.data.errcode){
                console.log(res.data);
                console.log("did not get openid");
              }else{
                that.globalData.token = res.data.sessionid;
              }
            },
            method: 'POST'
          };
          that.wxRequest("/loginPost", openIdReqConf);
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: true,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },
  wxRequest: function(apiPath,requestConf){
    let url = this.globalData.apiContextUrl + apiPath;
    requestConf.url = url;
    if (this.globalData.token){
      requestConf.header = requestConf.header || {};
      requestConf.header['x-token'] = this.globalData.token;
    }
    wx.request(requestConf);
  },

  globalData: {
    userInfo: null,
    apiContextUrl: 'https://todaynowork.group/wechat-prod-1.0',
    token : 'null'
  }
})


