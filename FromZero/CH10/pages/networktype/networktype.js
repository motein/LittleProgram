// pages/networktype/networktype.js
Page({

  /**
   * Page initial data
   */
  data: {
    network: '',
    language: '',
    model: '',
    pixelRatio:'',
    platform:'',
    version:'',
    windowHeight:'',
    windowWidth:''
  },
  networkTap: function(){
    var self = this
    wx.getNetworkType({
      success: function(res) {
        console.log(res)
        self.setData({
          network: res.networkType
        })
      },
      fail: function(err) {
        self.setData({
          network: '无法连接网络'
        })
      }
    })
  },
  sysinfoTap: function() {
    var self = this
    wx.getSystemInfo({
      success: function(res) {
        console.log(res)
        self.setData({
          language:res.language,
          model: res.model,
          pixelRatio: res.pixelRatio,
          platform: res.platform,
          version: res.version,
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })

      },
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