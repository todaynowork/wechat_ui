var app = getApp()
Page({
  data: {
    QA_user_name:'李文林',
    QA_body:'如何保证N个线程可以访问N个资源的同时又不导致死锁？',
    QA_hui_num:'3',
    QA_date:'2017/09/01',
    answer1: '多线程产生死锁需要四个条件，分别是互斥性，保持和请求, 不可剥夺性还有要形成闭环，z和四个条件缺一不可，只要破坏了其中一个条件就可以破坏死锁, 其中最简单的方法就是线程以同样的顺序加锁和释放锁，也就是破坏了第四个条件。',
    answer2: '',
    form:'form',
    answers:[
      [{
        ans_user_name: "李佳",
        ans_like_num: '15',
        ans_dislike_num: '0',
        ans_body: "多线程产生死锁需要四个条件，分别是互斥性，保持和请求, 不可剥夺性还有要形成闭环，z和四个条件缺一不可，只要破坏了其中一个条件就可以破坏死锁, 其中最简单的方法就是线程以同样的顺序加锁和释放锁，也就是破坏了第四个条件。"
        ,huifunum:'2',
        best: true
      }],
      [{
      ans_user_name: "李江浩",
      ans_like_num: '3',
      ans_dislike_num: '0',
      ans_body: "指定线程获取锁的顺序，并强制线程你找指定的方式获取和释放锁。当所有线程都按照顺序获取和释放锁时就不会发生死锁。",
      huifunum: '2',
      best: false
      }]
    ]
  },
  toanswer: function () {
    wx.navigateTo({
      url: '../QA/Answer'
    })
    }
});