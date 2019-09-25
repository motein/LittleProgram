// pages/video/video.js
function getRandomColor() {
  var colorStr = Math.floor(Math.random * 0xFFFFFF).toString(16);
  return "#" + "000000".substring(0, 6-colorStr) + colorStr;
}

Page({

  /**
   * Page initial data
   */
  inputValue: '',
  data: {
    src:'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
    danmuList: [
      {
        text: '第2s出现的弹幕',
        color: '#ff0000',
        time: 2
      },
      {
        text: '第5s出现的弹幕',
        color: '#ff00ff',
        time: 5
      }
    ]
  },
  videoErrorCallback: function(e) {
    console.log('视频错误信息：')
    console.log(e.detail.errMsg)
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  bindInputBlur: function(e) {
    this.inputValue = e.detail.value
  },
  bindSendDanmu: function() {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
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