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
  },

  confirmSetting() {
    this.setData({
      bottomDialog: false
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