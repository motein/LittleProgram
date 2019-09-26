// pages/phonehome/phonehome.js
var apikey ='Ws3VbrelSruFeyTiprO5QGCBTsF4wAX0';
Page({

  /**
   * Page initial data
   */
  data: {
    phone:'',
    city:'',
    prefix:'',
    province:'',
    suite:'',
    supplier:'',
    errMsg:'',
    errNum:-2
  },
  bindinput: function(e) {
    this.setData({
      phone:e.detail.value
    })
  },
  phoneTap:function(){
    var phone = this.data.phone
    if(phone!=null && phone!=""){
      var self = this;
      wx.request({
        url: 'http://apis.baidu.com/apistore/mobilenumber/mobilenumber',
        data: {
          'phone':phone
        },
        header: {
          'apikey': apikey,
          'Content-Type': 'application/json'
        },
        success: function(res) {
          console.log(res.data.retData)
          if (res.data.errNum == 0) {
            self.setData({
              errMsg: '',
              errNum: res.data.errNum,
              city: res.data.retData.city,
              prefix: res.data.retData.prefix,
              province: res.data.retData.province,
              suit: res.data.retData.suit,
              supplier: res.data.retData.supplier
            })
          } else {
            console.log("ERR")
            self.setData({
              errMsg: res.data.retMsg,
              errNum: res.data.errNum
            })
          }
        }
      })
    }
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