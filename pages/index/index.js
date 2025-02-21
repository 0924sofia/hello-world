import * as utils from "../../utils/util";
const app = getApp()

Page({
  data: {
    pageConfig: {
      pageBgColor: '#000',
      pageTitle: '手持弹幕',
    },
    scrollText: '滚动动画测试',
    scrollDuration: 3000, // 滚动速度（毫秒）
    windowWidth: app.globalData.windowWidth,
  },

  onLoad() {
    // 创建动画实例
    this.animation = wx.createAnimation({
      timingFunction: 'linear', // 匀速动画
    });
    this.bindAnimation();
  },

  bindAnimation() {
    var animation = wx.createAnimation({
      duration: 0, // 初始为 0，手动设置后续动画时长
      timingFunction: 'linear', // 动画的时间函数，这里使用线性的时间函数
    })

    // 将元素从右向左移动一个wrapWidth宽度
    animation.translateX(-this.data.windowWidth).step({
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
        this.animation.translateX(-this.data.windowWidth).step({
          duration: this.data.scrollDuration
        });
        this.setData({
          animation: animation.export(),
        })
      }.bind(this), 50); // 给初始化动画一个短暂延迟，不会导致跳帧或卡顿

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
    animation2.translateX(this.data.windowWidth).step({
      duration: 0
    });
    this_.setData({
      animation: animation2.export(),
    })
  },

  /**
   * 解决小程序退出、隐藏后台动画停止
   */
  onHide: function () {
    //解决小程序退出、隐藏后台动画停止
    //重新触发动画方法即可
    this.bindAnimation();
  },

  // 滚动弹幕
  gotoScrollText: utils.debounce(function () {
    wx.navigateTo({
      url: `/pages/scrollText/scrollText?scrollText=${this.data.scrollText}`,
    })
  }, 500, true),

  // 表白灯牌
  gotoConfession: utils.debounce(function () {
    wx.navigateTo({
      url: '/pages/staticText/staticText',
    })
  }, 500, true),


})