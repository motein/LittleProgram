/*********************************tabBar***********************************/
// tabBar's borderStyle can only support 2 colors: black & white.
// tabBar's list at least includes 2 tabs, and at most includes 5 tabs.
// tabBar's icon should be less than 40KB.

/*********************************Page json config***********************************/
// Page no need to add "window" key, and will override the parent config.

/************************************生命周期函数***********************************/
// Init data is located in Page({data:...}) as the 1st time rendering.

/************************************Page js file***********************************/
// 1. onLoad: 页面加载完调用该函数，一个页面只会调用一次。
// 2. onShow：页面显示时调用该函数，每次打开页面都会调用一次。
// 3. onReady: 页面初次渲染完成调用该函数。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
// 4. onHide： 页面隐藏时调用该函数。
// 5. onUnload： 页面卸载时调用该函数。
// 6. onPullDownRefresh: 下拉刷新时调用该含糊。需要开启才生效。当处理完数据刷新后，wx.stopPullDownRefresh停止刷新。

/************************************Template***********************************/
// include is more powerful than import

/************************************冒泡事件***********************************/
// 1. touchstart：手指触摸
// 2. touchmove：手指触摸后移动
// 3. touchcancel：手指触摸动作被打断，入来电提醒、弹窗。
// 4. touchend：手指触摸动作结束
// 5. tap：手指触摸后离开
// 6. longtap：手指触摸后，超过350ms再离开