Page({
  // jumpToTieba: function () {
  //   wx.navigateTo({
  //     url: "Tieba_text/Tieba_text"
  //   });
  // },
  // jumpToTiebaWrite: function () {
  //   wx.navigateTo({
  //     url: "Tieba_write/Tieba_write"
  //   });
  // },
  data: {
    inputShowed: false,
    inputVal: "",
    title:"JAVA 基础培训课程",
    text:"20世纪90年代，硬件领域出现了单片式计算机系统，这种价格低廉的系统一出现就立即引起了自动控制领域人员的注意，因为使用它可以大幅度提升消费类电子产品（如电视机顶盒、面包烤箱、移动电话等）的智能化程度。Sun公司为了抢占市场先机，在1991年成立了一个称为Green的项目小组，帕特里克、詹姆斯·高斯林、麦克·舍林丹和其他几个工程师一起组成的工作小组在加利福尼亚州门洛帕克市沙丘路的一个小工作室里面研究开发新技术，专攻计算机在家电产品上的嵌入式应用。由于在开发Oak语言时，尚且不存在运行字节码的硬件平台，所以为了在开发时可以对这种语言进行实验研究，他们就在已有的硬件和软件平台基础上，按照自己所指定的规范，用软件建设了一个运行平台，整个系统除了比C++更加简单之外，没有什么大的区别。1992年的夏天，当Oak语言开发成功后，研究者们向硬件生产商进行演示了Green操作系统、Oak的程序设计语言、类库和其硬件，以说服他们使用Oak语言生产硬件芯片，但是，硬件生产商并未对此产生极大的热情。因为他们认为，在所有人对Oak语言还一无所知的情况下，就生产硬件产品的风险实在太大了，所以Oak语言也就因为缺乏硬件的支持而无法进入市场，从而被搁置了下来。",
    comment:"怎么才能学好java，所以我并不认同",
    items: [
      {
        comment0:"很厉害",
        aaas:[
          {
          name: "Lucy_li",
          content: "你也很厉害",
          }, 
          {
            name: "sunyuanchao01",
            content: "老司机带带我",
          },
          {
            name: "邱宇",
            content: "楼上6666！",
          }
        ],
        floorC:1,
        id: "1",
      },
      {
        aaas: [
          {
            name: "李志德",
            content: "哦呵呵或或或！",
          },
          {
            name: "王宇鹏",
            content: "垃圾！！！！",
          },
          {
            name: "王振宇",
            content: "hehehehhe",
          }
        ],
        comment0:"java 的编程思想是什么？",
        content: "同问",
        floorC: 2,
        id: "2"
      },
      {
        comment0:"good job",
        floorC: 3,
        id: "3",
        Pnumber: "66",
        title: "C++ 基础课程培训",
        text: "ios 基础课程 classroom SO3 traing room"
      },
      {
        floorC: 4,
        id: "4",
        Pnumber: "100",
        title: "PHP 基础课程培训",
        text: "ios 基础课程 classroom SO3 traing room"
      },
      {
        floorC: 5,
        id: "5",
        Pnumber: "30",
        title: "Python 基础课程培训",
        text: "ios 基础课程 classroom SO3 traing room"
      },
      {
        floorC: 6,
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