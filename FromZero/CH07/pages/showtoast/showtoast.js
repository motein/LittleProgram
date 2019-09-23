// pages/showtoast/showtoast.js
Page({

  /**
   * Page initial data
   */
  data: {

  },
  showtoast1Tap: function() {
    wx.showToast({
      title: "默认1.5秒关闭的loading消息提示框",
      icon: "loading",
      success: function() {
        console.log("success回调，可在这里编写其他代码");
      },
      complete: function() {
        console.log("complete回调，可在这里编写其他代码")
      }
    });
  },
  showtoast2Tap: function () {
    wx.showToast({
      title: "5秒关闭的loading消息提示框",
      icon: "loading",
      duration: 5000
    });
  },
  showtoast3Tap: function () {
    wx.showToast({
      title: "默认1.5秒关闭的toast消息提示框",
      icon: "success"
    });
  },
  showtoast4Tap: function () {
    wx.showToast({
      title: "5秒关闭的toast消息提示框",
      icon: "success",
      duration: 5000
    });
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