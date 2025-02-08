const App = getApp();
Component({
  properties: {
    navigationInfo: Object,
    pageName: String, //中间的title
    pageSrc: String,
    showNav: { //判断是否显示左上角的按钮    
      type: Boolean,
      value: false,
      observer: (val) => {
      }
    },
    showHome: { //判断是否显示左上角的home按钮
      type: Boolean,
      value: false
    },
    showSearch: {
      type: Boolean,
      value: false
    },
    // 返回按钮的返回类型
    navType: {
      type: String
    },
    // 返回按钮的返回路径
    url: {
      type: String
    },
    showBgImg: Boolean, // 是否展示底部背景图
    zIndex: String,
    backIconStyle: String,
  },


  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
      this.setData({
        navHeight: App.globalData.navHeight,
        navTop: App.globalData.navTop,
        statusBarHeight: App.globalData.statusBarHeight,
      })
    }
  },
  methods: {
    //回退
    navBack: function () {
      try {
        switch (this.data.navType) {
          case 'navigateTo':
            wx.navigateTo({
              url: this.data.url,
            })
            break;
          default:

            wx.navigateBack({
              fail: function () {
                wx.reLaunch({
                  url: '/pages/index/index',
                })
              }
            })

            break;
        }

      } catch (error) {
        wx.reLaunch({
          url: '/pages/index/index',
        })
      }

    },
    //回主页
    navHome: function () {
      wx.switchTab({
        url: '/pages/index/index'
      })
    },
    navSearch() {
      this.triggerEvent('search')
    }
  }
})