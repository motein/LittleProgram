// pages/picker/picker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: "Europe", value: "欧洲" },
      { name: "America", value: "美洲", checked: 'true' },
      { name: "Africa", value: "非洲" },
      { name: "SoutheastAsia", value: "东南亚" },
      { name: "Other", value: "其他" }
    ],
    countries: ["中国", "美国", "巴西", "日本", "英国", "法国", "意大利"],
    index: 0,
    date: "2016-09-01",
    time: "12:01",
    suggest:""
  },
  formSubmit: function (e) {
    console.log("提交表单");
    console.log(e.detail.value);
  },
  formReset: function (e) {
    console.log("form发生了reset事件");
  },
  bindPickerChange: function(e){
    console.log("picker发送选择改变")
    console.log(e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindDateChange: function(e) {
    console.log("日期发生改变")
    console.log(e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function(e){
    console.log("时间发生改变")
    console.log(e.detail.value)
    this.setData({
      time: e.detail.value
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