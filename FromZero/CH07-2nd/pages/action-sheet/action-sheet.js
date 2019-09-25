var items = ['菜单1', '菜单2', '菜单3', '菜单4']

var pageObject = {

  /**
   * Page initial data
   */
  data: {
    actionSheetHidden: true,
    actionSheetItems: items
  },
  actionSheetTap: function(e) {
    this.setData({
      actionSheetHidden: false
    })
  },
  actionSheetTap2: function (e) {
    wx.showActionSheet({
      itemList: items,
      success: function(res) {
        console.log("success")
        console.log(res)
        if (!res.cancel) {
          console.log(res.tapIndex)
        }
      },
      complete: function(e) {
        console.log("complete")
        console.log(e)
      }
    })
  },
  actionSheetChange: function (e) {
    this.setData({
      actionSheetHidden: true
    })
  }
}

for (var i = 0; i < items.length; ++i) {
  (function (itemName) {
    pageObject['bind' + itemName] = function (e) {
      console.log('click' + itemName)
      console.log(e)
      this.setData({
        actionSheetHidden: true
      })
    }
  })(items[i])
}
Page(pageObject)