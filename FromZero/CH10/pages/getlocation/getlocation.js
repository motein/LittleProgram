// pages/getlocation/getlocation.js
Page({

  /**
   * Page initial data
   */
  data: {

  },
  mapTap: function() {
    wx.openLocation({
      latitude: 30.657427,
      longitude: 104.066163,
      scale: 28,
      name: '成都市天府广场',
      address: '成都市天府广场',
      success: function(res) {
        console.log(res)
      },
      fail: function(err) {
        consol.log(err)
      },
      complete: function(info) {
        console.log(info)
      }
    })
  },
  locationTap: function() {
    var self = this
    wx.getLocation({
      type: 'gcj02',
      success: function(res) {
        console.log(res)
        wx.openLocation({
          latitude: res.latitude,
          longitude: res.longitude,
          scale: 28,
          name: '当前位置',
          address: '未知位置',
          success: function(res) {
            console.log(res)
          },
          fail: function(err) {
            console.log(err)
          },
          complete: function(info){
            console.log(info)
          }
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