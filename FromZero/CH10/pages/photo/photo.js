// pages/photo/photo.js
Page({

  /**
   * Page initial data
   */
  data: {
    sources:''
  },
  choosePhotoTap1: function() {
    var self = this
    wx.chooseImage({
      count:2,
      sizeType:['original'],
      sourceType:['album'],
      success: function(res) {
        console.log(res)
        self.setData({
          sources: res.tempFilePaths
        })
      },
    })
  },
  choosePhotoTap2: function () {
    var self = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['camera'],
      success: function (res) {
        console.log(res)
        self.setData({
          sources: res.tempFilePaths
        })
      },
    })
  },
  choosePhotoTap3: function () {
    var self = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        console.log(res)
        self.setData({
          sources: res.tempFilePaths
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