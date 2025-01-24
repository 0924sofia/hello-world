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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.bindAnimation();
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

  bindAnimation() {
    var animation = wx.createAnimation({
      duration: 0, // 初始为 0，手动设置后续动画时长
      timingFunction: 'linear', // 动画的时间函数，这里使用线性的时间函数
    })

    // 将元素从右向左移动一个wrapWidth宽度
    animation.translateY(-this.data.windowHeight).step({
      duration: 0
    }); // 负号：向左；正数：向右移动多少距离。

    // 将动画导出并更新数据
    this.setData({
      animation: animation.export({
        duration: 0
      }),
    })
    // 设置循环动画
    this.animation = animation;

    // 设置动画的周期，每隔一段时间重复执行动画
    setInterval(function () {
      //第二个动画 文字位置初始化
      this.Animation2();

      // 延迟播放滚动动画（效果会更好点）
      setTimeout(function () {
        this.animation.translateY(-this.data.windowHeight).step({
          duration: this.data.scrollDuration
        });
        this.setData({
          animation: animation.export(),
        })
      }.bind(this), 2000); // 给初始化动画一个短暂延迟

    }.bind(this), this.data.scrollDuration);

  },

  /**
   * 第二个动画 重置动画，使元素回到初始位置
   */
  Animation2() {
    var this_ = this;
    var animation2 = wx.createAnimation({
      duration: 0, // 将重置动画的时长设为0，立即回到初始位置
      timingFunction: 'linear',
    })
    animation2.translateY(this.data.windowHeight).step({
      duration: 0
    });
    this_.setData({
      animation: animation2.export(),
    })
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