//获取应用实例
const app = getApp();
var goodsList = [
  {
    "id": 1,
    "name": "SK2精华霜",
    "price": "20000",
    "unit":"JPY"
  },
  {
    "id": 1,
    "name": "SK2精华霜",
    "price": "30000",
    "unit": "JPY"
  },
  {
    "id": 1,
    "name": "SK2精华霜",
    "price": "30000",
    "unit": "JPY"
  },
  {
    "id": 1,
    "name": "SK2精华霜",
    "price": "40000",
    "unit": "JPY"
  },
  {
    "id": 1,
    "name": "SK2精华霜",
    "price": "50000",
    "unit": "JPY"
  },
  {
    "id": 1,
    "name": "SK2精华霜",
    "price": "60000",
    "unit": "JPY"
  },
  {
    "id": 1,
    "name": "SK2精华霜",
    "price": "70000",
    "unit": "JPY"
  },
  {
    "id": 1,
    "name": "SK2精华霜",
    "price": "80000",
    "unit": "JPY"
  },
  {
    "id": 1,
    "name": "SK2精华霜",
    "price": "90000",
    "unit": "JPY"
  },
  {
    "id": 1,
    "name": "SK2精华霜",
    "price": "10000",
    "unit": "JPY"
  }
];
var countryList = [{ "id": 1, "key": "china", "name": "中国" }, 
                    { "id": 1, "key": "usa", "name": "美国" }, 
                    { "id": 1, "key": "jpa", "name": "日本" }];
Page({
  data: {
    motto: getApp().data.test,
    userInfo: {},
    goodsList: goodsList,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    countryList: countryList,
    curCountry: 0,
    listScrollViewHeight: (wx.getSystemInfoSync().windowHeight-130)
  },
  selectTools: function (event) {
    console.log(event.currentTarget.id);
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
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '海淘参考',
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      curCountry: e.detail.value
    })
  },
});