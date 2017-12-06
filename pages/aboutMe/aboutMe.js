//获取应用实例
const app = getApp();

Page({
  data: {
    motto: getApp().data.test,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    curCountry: 0,
    listScrollViewHeight: (wx.getSystemInfoSync().windowHeight-60)
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: 'ME',
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      curCountry: e.detail.value
    })
  }
});