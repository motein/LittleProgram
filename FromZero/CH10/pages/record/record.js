// pages/record/record.js
var formatSeconds = function(value) {
  var time = parseFloat(value)
  var h = Math.floor(time/3600)
  var m = Math.floor((time-h*3600)/60)
  var s = time - h*3600 - m*60
  return [h, m, s].map(formatNumber).join(':')

  function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }
}

var interval;

Page({

  /**
   * Page initial data
   */
  data: {
    formatRecordTime: '00:00:00',
    recordTime: 0,
    recordFile:''
  },
  startTap: function() {
    var self = this
    interval = setInterval(function(){
      self.data.recordTime += 1
      self.setData({
        formatRecordTime: formatSeconds(self.data.recordTime)
      })
    }, 1000)

    wx.startRecord({
      success: function(res) {
        console.log(res)
        self.setData({
          formatRecordTime: formatSeconds(self.data.recordTime),
          recordFile: res.tempFilePath
        })
      },
      complete: function() {
        clearInterval(interval)
      }
    })
  },
  endTap: function() {
    wx.stopRecord()
    clearInterval(interval)
    this.setData({
      formatRecordTime: '00:00:00',
      recordTime: 0
    })
  },
  playTap: function() {
    var self = this
    wx.playVoice({
      filePath: self.data.recordFile,
      complete: function() {}
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