Page({
  jumpToTieba: function () {
    wx.navigateTo({
      url: "Tieba_text/Tieba_text?id=1"
    });
  },
  jumpToTiebaWrite:function(){
    wx.navigateTo({
      url: "Tieba_write/Tieba_write"
    });
  },
  data: {
    inputShowed: false,
    inputVal: "",
    items:[
      {
        id: "1",
        Pnumber:"25",
        title:"JAVA 基础课程培训",
        text:"java spring 基础课程 classroom SO2 traing room"
      },
      {
        id: "2",
        Pnumber:"60",
        title: "IOS 基础课程培训",
        text: "ios 基础课程 classroom SO3 traing room"
      },
      {
        id: "3",
        Pnumber: "66",
        title: "C++ 基础课程培训",
        text: "ios 基础课程 classroom SO3 traing room"
      },
      {
        id: "4",
        Pnumber: "100",
        title: "PHP 基础课程培训",
        text: "ios 基础课程 classroom SO3 traing room"
      },
      {
        id: "5",
        Pnumber: "30",
        title: "Python 基础课程培训",
        text: "ios 基础课程 classroom SO3 traing room"
      },
      {
        id: "6",
        Pnumber: "63",
        title: "pmp 认证考试培训",
        text: "pmp 认证考试培训 classroom SO3 traing room"
      }
    ]
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
});