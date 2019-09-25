// pages/audioapi/audioapi.js
Page({

  /**
   * Page initial data
   */
  data: {

  },
  tapPlay: function() {
    wx.playBackgroundAudio({
      dataUrl: 'http://music.163.com/song/media/outer/url?id=476592630.mp3',
      title:'魔兽',
      coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
    })
  },
  tapPause: function() {
    wx.pauseBackgroundAudio()
  },
  tapSeek: function() {
    wx.seekBackgroundAudio({
      position: 30,
    })
  },
  tapStop: function() {
    wx.stopBackgroundAudio()
  },
  tapGetPlayState: function() {
    wx.getBackgroundAudioPlayerState({
      success: function(res) {
        console.log(res)
      }
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.onBackgroundAudioPlay(function(){
      console.log('监听音乐播放，开始播放音乐')
    })
    wx.onBackgroundAudioPause(function() {
      console.log('监听音乐暂停，暂停了音乐')
    })
    wx.onBackgroundAudioStop(function() {
      console.log('监听音乐停止，停止了音乐')
    })
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