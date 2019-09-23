// pages/toast/toast.js
Page({

  /**
   * Page initial data
   */
  data: {
    hidden: true,
    hidden2: true
  },
  toast1Change: function() {
    this.setData({
      hidden: true
    });
    console.log("第1个toast组件的change事件，这里可进行其他操作")
  },
  toast2Change: function () {
    this.setData({
      hidden2: true
    });
    console.log("第2个toast组件的change事件，这里可进行其他操作")
  },
  toast1Tap: function() {
    this.setData({
      hidden: false
    })
  },
  toast2Tap: function () {
    this.setData({
      hidden2: false
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