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
            // url: '/loginPostTest',
            data: {
              code: res.code
            },
            // header:{
            //   'Content-Type':'application/x-www-form-urlencoded'
            // },
            // header: {
            //   'Content-Type': 'application/json'
            // },
            success: function (res) {
              
              if (res.data.errcode){
                console.log(res.data);
                console.log("did not get openid");
              }else{
                that.globalData.token = res.data.sessionid;
                that.globalData.openId = res.data.openId;
                that.wxRequest("/forumjson",{sucess:function(res){
                  console.log(res.data);
                }});
                that.getUserInfo();
              }
            },
            method: 'POST'
          };
          that.wxRequest("/login", openIdReqConf);
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
          let userReqConf = {
            // url: '/loginPostTest',
            data: {
              // openId: that.globalData.openId,
              avatarUrl: res.userInfo.avatarUrl,
              email:'',
              nickName:res.userInfo.nickName
            },
            success: function (res) {

              if (res.data.errcode) {
                console.log(res.data);
              } else {
                //get customize user info, image
                that.globalData.userInfo.email = res.data.email;
                that.globalData.userInfo.userId = res.data.id;
              }
            },
            method: 'POST'
          };
          that.wxRequest("/user", userReqConf);
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
      requestConf.header['x-auth-token'] = this.globalData.token;
    }
    wx.request(requestConf);
  },

  globalData: {
    userInfo: null,
    hasLogin: false,
    apiContextUrl: 'https://todaynowork.group/wechat-du-1.0',
    // apiContextUrl: 'http://localhost:8080',
    token : 'null',
    openId: null
  }
})


