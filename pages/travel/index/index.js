//获取应用实例
const app = getApp();
var allDates=["test2","test2","test3"]
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
    console.log(event.currentTarget.id);
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
  }
});