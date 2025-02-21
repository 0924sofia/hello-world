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
    tabList: ['字号', '颜色', '背景', '速度'],
    tabIndex: 0,
    sizeList: ['小', '中', '大', '特大', '超特大'],
    speedList: ['静止', '慢', '中', '快'],
    sizeIndex: 2,
    speedIndex: 2,
    bottomDialog: false,
    showDialog: true,
    bgColor: "#000000",
    colorList: [{
      id: 1,
      name: '白色',
      value: '#ffffff'
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
      value: '#000000'
    }],
    rgb: 'rgb(0,154,97)', //初始值
    pick: false,
    toView: '',
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
    this.setColor(e.detail.color)
  },

  chooseColor(e) {
    const {
      index,
      value
    } = e.currentTarget.dataset
    this.setData({
      colorIndex: index
    })
    if (index > 5) {
      this.setData({
        toView: "color" + index
      })
    }

    this.setColor(value)
  },

  setColor(value) {
    if (this.data.tabIndex == 1) {
      this.setData({
        fontColor: value,
        scrollTextStyle: `color:${value};font-size:${this.data.fontSize}px`
      })
    } else {
      this.setData({
        bgColor: value,
        containerStyle: `background-color:${value}`,
      })
    }
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
        fontSize = 150
        break;
      case 1:
        fontSize = 200
        break;
      case 2:
        fontSize = 250
        break;
      case 3:
        fontSize = 300
        break;
      case 4:
        fontSize = 350
        break;
    }
    this.setData({
      fontSize,
      scrollTextStyle: `color:${this.data.fontColor};font-size:${fontSize}px;`,
    })
  },

  chooseSpeed(e) {
    const {
      index
    } = e.currentTarget.dataset
    this.setData({
      speedIndex: index
    })
    let fontSize = 250
    switch (index) {
      case 0:
        fontSize = 150
        break;
      case 1:
        fontSize = 200
        break;
      case 2:
        fontSize = 250
        break;
      case 3:
        fontSize = 300
        break;
    }
    this.setData({

    })
  },

  confirmSetting() {
    const _rgb = this.getComplementaryColor(this.data.bgColor)
    this.setData({
      bottomDialog: false,
      tabIndex: 0,
      confirmStyle: `border:2rpx solid ${_rgb}`,
      iconStyle: `color:${_rgb}`,
    })
  },

  // 收起
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

  bindconfirm(e) {
    this.setData({
      scrollText: e.detail.value
    })
  },

  // 十六进制颜色转换成RGB值
  hexToRgb(hex) {
    // 移除 '#' 并转换为数字
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return {
      r,
      g,
      b
    };
  },

  // RGB值转换成十六进制颜色
  rgbToHex({
    r,
    g,
    b
  }) {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  },
  getComplementaryColor(hexColor) {
    const rgb = this.hexToRgb(hexColor);
    const complementaryRgb = {
      r: 255 - rgb.r,
      g: 255 - rgb.g,
      b: 255 - rgb.b,
    };
    return this.rgbToHex(complementaryRgb);
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