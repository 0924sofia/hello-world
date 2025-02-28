// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    const windowInfo = wx.getWindowInfo()
    this.globalData.getSystemInfo = windowInfo
    this.globalData.pixelRatio1 = 750 / windowInfo.windowWidth;
    this.globalData.pixelRatio = windowInfo.windowWidth / 750
    this.globalData.windowWidth = windowInfo.windowWidth;
    this.globalData.windowHeight = windowInfo.windowHeight;
    // 存储底部安全区域
    this.globalData.safeHeight = windowInfo.screenHeight - windowInfo.safeArea.bottom;
    let statusBarHeight = windowInfo.statusBarHeight //设备顶部标签栏信息
    let navHeight
    if (menuButtonObject) {
      let navTop = menuButtonObject.top //胶囊按钮与顶部的距离
      navHeight = statusBarHeight + menuButtonObject.height + (navTop - statusBarHeight) * 3 // 导航高度
      this.globalData.navTop = navTop
    } else {
      navHeight = statusBarHeight + 51
    }
    this.globalData.navHeight = navHeight
    this.globalData.statusBarHeight = statusBarHeight

  },
  globalData: {
    userInfo: null
  }
})