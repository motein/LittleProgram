// pages/button/button.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultSize: "default",
    primarySize: "default",
    warnSize: "default",
    disabled: false,
    plain: false,
    loading: false
  },
  setDisabled: function(e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  setPlain: function(e) {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading: function (e) {
    this.setData({
      loading: !this.data.loading
    })
  },
  default: function(e){
    var d = this.data.defaultSize === "default"?"mini":"default";
    this.setData({
      defaultSize: d
    })
  },
  primary: function (e) {
    var d = this.data.primarySize === "default" ? "mini" : "default";
    this.setData({
      primarySize: d
    })
  },
  warn: function (e) {
    var d = this.data.warnSize === "default" ? "mini" : "default";
    this.setData({
      warnSize: d
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