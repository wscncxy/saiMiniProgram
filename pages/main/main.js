//获取应用实例
const app = getApp();
var allDates=[
  {
    "id": 1,
    "name": "姿势海洋",
    "url": "/pages/knowledge/index/index",
    "icon": "/image/book.jpg"
  },
  {
    "id":2,
    "name":"汇率参考",
    "url":"/pages/rate/index/index",
    "icon":"/image/rate.jpg"
  },
  {
    "id": 3,
    "name": "海淘报价",
    "url": "/pages/shopping/index/index",
    "icon": "/image/shopping.jpg"
  },
  {
    "id": 4,
    "name": "旅行游记",
    "url": "/pages/travel/index/index",
    "icon": "/image/travel.jpg"
  }
]
var dataList = allDates;
Page({
  data: {
    motto: getApp().data.test,
    userInfo: {},
    dataList: dataList,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  selectTools:function(event){
    
    wx.navigateTo({"url":event.currentTarget.dataset.url});
  },
  searchInfo:function(event){
    var searchText = event.detail.value;
    dataList=[];
    allDates.forEach(function(value, index, array){
      if (value == searchText){
        
        dataList.push(value);
      }
    });
    this.setData({ dataList: dataList});
    console.log(dataList);
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: 'SAI的小工具',
    });
  }
});