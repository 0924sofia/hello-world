const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    breathNum: 1.0, // 初始透明度
    reduce: true, // 控制透明度增减方向
    show: true,
    breathTextStyle: 'text-shadow: 0px 0px 40px #F4C1EA;',
    rgb: 'rgb(0,154,97)', //初始值
    pick: false,
    fontColor: '#F4C1EA',
    showDialog: true,
    bottomDialog: false,
    blurRadius: 40,
    staticText: '呼吸文字效果',
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

  bindconfirm(e) {
    console.log('hyp ', e);
    this.setData({
      staticText: e.detail
    })
  },
  closeDialog() {
    this.setData({
      showDialog: false,
    })
  },

  showDialog() {
    this.setData({
      showDialog: !this.data.showDialog
    })
  },
  openSetting() {
    this.setData({
      bottomDialog: true
    })
  },

  chooseSize(e) {
    const {
      fontSize,
      blurRadius
    } = e.detail
    this.setData({
      fontSize,
      breathTextStyle: `text-shadow: 0px 0px ${blurRadius}px ${this.data.fontColor};font-size:${fontSize}px;`,
    })
  },

  openColorPicker() {
    this.setData({
      pick: true,
      show: false
    })
  },

  pickColor(e) {
    this.setData({
      colorPickValue: e.detail.color,
    })
    this.setColor({
      color: e.detail.color,
      tabIndex: this.data.tabIndex,
      blurRadius: this.data.blurRadius
    })
  },

  changeTab(e) {
    this.setData({
      tabIndex: e.detail
    })
  },

  setColor(e) {
    const {
      tabIndex,
      color,
      blurRadius
    } = e.detail || e
    console.log('hyp e', e);
    if (tabIndex == 1) {
      this.setData({
        fontColor: color,
        breathTextStyle: `text-shadow: 0px 0px ${blurRadius}px ${color};font-size:${this.data.fontSize}px`
      })
    } else {
      this.setData({
        bgColor: color,
        containerStyle: `background-color:${color}`,
      })
    }
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
        if (breathNum <= 0.4) reduce = false;
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