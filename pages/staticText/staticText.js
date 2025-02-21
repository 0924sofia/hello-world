const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    breathNum: 1.0, // 初始透明度
    reduce: true     // 控制透明度增减方向
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.startBreathEffect();
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
  startBreathEffect() {
    setInterval(() => {
      let {
        breathNum,
        reduce
      } = this.data;
      // 调整透明度步长（每次增减0.1）
      if (reduce) {
        breathNum -= 0.1;
        if (breathNum <= 0) reduce = false;
      } else {
        breathNum += 0.1;
        if (breathNum >= 1) reduce = true;
      }
      // 更新数据
      this.setData({
        breathNum,
        reduce
      });
    }, 200); // 200ms 调整一次，控制呼吸速度
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