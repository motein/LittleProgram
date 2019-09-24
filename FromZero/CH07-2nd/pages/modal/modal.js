// pages/modal/modal.js
Page({

  /**
   * Page initial data
   */
  data: {
    modalHidden: false,
    modalHidden2: true,
    regions: [
      {name: 'CHN', value: '中国', checked: 'true'},
      {name: 'USA', value: '美国'},
      {name: 'ERA', value: '巴西'},
      {name: 'ENG', value: '英国'},
      {name: 'TUR', vlaue: '法国'}
    ],
    date: '2016-11-1'
  },
  modalTap: function (e) {
    this.setData({
      modalHidden: false
    })
  },
  modalConfirm: function(e){
    this.setData({
      modalHidden: true
    }),
      console.log(e)
  },
  modalCancel: function (e) {
    this.setData({
      modalHidden: true
    }),
      console.log(e)
  },
  modalTap2: function (e) {
    this.setData({
      modalHidden2: false
    })
  },
  modalChange2: function (e) {
    this.setData({
      modalHidden2: true
    })
    console.log(e);
  },
  bindDateChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  modalTap3: function() {
    wx.showModal({
      title: '提示',
      content: '这是使用API显示的弹出框',
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
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