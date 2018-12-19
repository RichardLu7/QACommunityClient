//answer.js
// var util = require('../../utils/util.js')
//var qaadatas = require('../../data/question_data.js')

Page({
  data: {
    question_id:15,
    answer_list:[],
    followq:true
  },
  //事件处理函数
  bindItemTap: function () {
    wx.navigateTo({
      url: '../answers/answers'
    })
  },
  onLoad: function (e) {
    console.log('onLoad')
    var that = this
    wx.request({
      url: 'http://localhost:8080/answer/getAnswers',
      method:'GET',
      data:{
      },
      success:function(res){
        var answer_list = res.data
        console.log(answer_list)
        that.setData({
          answer_list:answer_list
        })
      }

    })
    //调用应用实例的方法获取全局数据
    
  },
  change_followq: function () {
    var followq = this.data.followq;
    this.setData({
      followq: !followq
    })
  },

  tapName: function (event) {
    console.log(event)
  }
})