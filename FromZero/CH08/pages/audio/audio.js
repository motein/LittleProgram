// pages/audio/audio.js
Page({

  /**
   * Page initial data
   */
  data: {
    current: {
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      name: '魔兽',
      author: '某人',
      src: 'http://music.163.com/song/media/outer/url?id=476592630.mp3'
    },
    audioAction: {
      method: 'pause'
    }
  },
  onReady: function(e) {
    this.adContr = wx.createAudioContext('audio1')
  },
  audioPlay: function() {
    this.adContr.play()
  },
  audioPause: function() {
    this.adContr.pause()
  },
  audio20: function() {
    this.adContr.seek(20)
  },
  audioStart: function() {
    this.adContr.seek(0)
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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