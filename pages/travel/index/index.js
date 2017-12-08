//获取应用实例
const app = getApp();
var allDates = ["test2", "test2", "test3"]
var dataList = allDates;
var categoryList = [{ "id": 1, "name": "日常" },
{ "id": 2, "name": "签证" },
{ "id": 3, "name": "日本" },
{ "id": 4, "name": "美国" },
{ "id": 5, "name": "欧洲" },
{ "id": 6, "name": "国内" }];

Page({
  data: {
    motto: getApp().data.test,
    userInfo: {},
    dataList: dataList,
    hasUserInfo: false,
    categoryList: categoryList
  },
  selectTools: function (event) {
    console.log(event.currentTarget.id);
  }, 
  onLoad: function () {
    
    wx.setNavigationBarTitle({
      title: 'SAI的旅程',
    });
    
  },
  searchInfo: function (event) {
    var searchText = event.detail.value;
    dataList = [];
    allDates.forEach(function (value, index, array) {
      if (value == searchText) {

        dataList.push(value);
      }
    });
    this.setData({ dataList: dataList });
    console.log(dataList);
  },
  selectCategory: function (e) {
    console.log(e.currentTarget.dataset.id);
  }
});