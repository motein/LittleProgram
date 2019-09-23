// pages/loading/loading.js
Page({

  /**
   * Page initial data
   */
  data: {
    hidden: true,
    hidden2: true,
    time: 5
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var self = this;
    // Timer
    setInterval(function(){
      var h2 = self.data.hidden2;
      var t = self.data.time;
      if (!h2) {
        t=t-1;
        if (t>0) {
          self.setData({
            time: t
          })
        }
      }
    }, 1000);
  },
  loadingtap: function() {
    this.setData({
      hidden: true
    })
  },
  loadingTap1: function() {
    this.setData({
      hidden: false
    })
  },
  loadingTap2: function() {
    this.setData({
      hidden2: false,
      time: 5
    })

    var self = this
    // Timer
    setTimeout(function(){
      self.setData({
        hidden2: true
      })
    }, 5000)
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