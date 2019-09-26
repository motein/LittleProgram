// pages/getweixin/getweixin.js
Page({

  /**
   * Page initial data
   */
  data: {
    html: ''
  },
  getweixinTap: function() {
    var self = this
    wx.request({
      url: 'https://mp.weixin.qq.com/',
      data: {
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
        self.setData({
          html: res.data
        })
      }
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})