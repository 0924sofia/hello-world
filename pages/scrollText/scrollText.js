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
    scrollText: '竖着滚动动画测试',
    scrollDuration: 4000, // 滚动速度（毫秒）
    windowHeight: app.globalData.windowHeight,
    statusBarHeight: app.globalData.statusBarHeight,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
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