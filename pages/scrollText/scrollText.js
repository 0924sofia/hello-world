import * as utils from "../../utils/util";
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageConfig: {
      pageBgColor: '#000',
      pageTitle: '',
    },
    scrollText: '',
    scrollDuration: 4000, // 滚动速度（毫秒）
    windowHeight: app.globalData.windowHeight,
    statusBarHeight: app.globalData.statusBarHeight,
    tabList: ['字号', '颜色', '背景'],
    tabIndex: 0,
    sizeList: ['小', '中', '大', '特大', '超特大'],
    sizeIndex: 2,
    bottomDialog: false,
    colorList: [{
      id: 1,
      name: '白色',
      value: '#fff'
    }, {
      id: 2,
      name: '粉色',
      value: '#F4C1EA'
    }, {
      id: 3,
      name: '玫红色',
      value: '#ff00ff'
    }, {
      id: 4,
      name: '红色',
      value: '#ff0000'
    }, {
      id: 5,
      name: '橙色',
      value: '#ffa500'
    }, {
      id: 6,
      name: '黄色',
      value: '#FFFF00'
    }, {
      id: 7,
      name: '绿色',
      value: '#00FF00'
    }, {
      id: 8,
      name: '青色',
      value: '#007175'
    }, {
      id: 9,
      name: '蓝色',
      value: '#0000FF'
    }, {
      id: 10,
      name: '深蓝色',
      value: '#000080'
    }, {
      id: 11,
      name: '紫色',
      value: '#9932CD'
    }, {
      id: 12,
      name: '灰色',
      value: '#808080'
    }, {
      id: 13,
      name: '黑色',
      value: '#000'
    }],
    rgb: 'rgb(0,154,97)', //初始值
    pick: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      scrollText: options?.scrollText
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  openColorPicker() {
    this.setData({
      pick: true,
      bottomDialog: false
    })
  },

  pickColor(e) {
    this.setData({
      colorPickValue: e.detail.color,
    })
  },

  chooseColor(e) {
    const {
      index
    } = e.currentTarget.dataset
    this.setData({
      colorIndex: index
    })
  },

  changeTab(e) {
    const {
      index
    } = e.currentTarget.dataset
    this.setData({
      tabIndex: index
    })
  },

  chooseSize(e) {
    const {
      index
    } = e.currentTarget.dataset
    this.setData({
      sizeIndex: index
    })
    let fontSize = 250
    switch (index) {
      case 0:
        fontSize = 50
        break;
      case 1:
        fontSize = 100
        break;
      case 2:
        fontSize = 150
        break;
      case 3:
        fontSize = 200
        break;
      case 4:
        fontSize = 250
        break;
    }
    this.setData({
      fontSize,
    })
  },

  confirmSetting() {
    this.setData({
      bottomDialog: false,
      tabIndex: 0,
    })
  },

  openEmoticon() {

  },

  openSetting() {
    this.setData({
      bottomDialog: true
    })
  },

  bindconfirm(e) {
    this.setData({
      scrollText: e.detail.value
    })
  },

  navBack() {
    wx.navigateBack()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})