//获取应用实例
const app = getApp();
var allDates=[]
var dataList = allDates;

var countryList = [
 { "id": 1, "key": "china", "name": "人民币￥"},
{ "id": 2, "key": "usa", "name": "美元$" },
{ "id": 3, "key": "jpa", "name": "日元¥" }]

Page({
  data: {
    motto: getApp().data.test,
    userInfo: {},
    dataList: dataList,
    hasUserInfo: false,
    countryList: countryList,
    curFromMoney: 0,
    curToMoney: 2,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '汇率参考',
    })
  },
  changeFromMoney: function (e) {
    this.setData({
      curFromMoney: e.detail.value
    })
  },
  changeToMoney: function (e) {
    this.setData({
      curToMoney: e.detail.value
    })
  },
  rateIt:function(e){
    console.log(countryList[this.data.curFromMoney].name + " TO " + countryList[this.data.curToMoney].name);
  },
  onPullDownRefresh:function (e) {
    console.log("ddd");
    wx.showNavigationBarLoading();
    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  }
});