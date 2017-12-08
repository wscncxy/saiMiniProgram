//获取应用实例
const app = getApp();
var allDates = ["test2", "test2", "test3"]
var dataList = allDates;
var categoryList = [{ "id": 1, "name": "全部" },
{ "id": 2, "name": "IT" },
{ "id": 3, "name": "语言" },
{ "id": 4, "name": "经济" },
{ "id": 5, "name": "管理" },
{ "id": 6, "name": "数学" }];

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
      title: '知识分享',
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