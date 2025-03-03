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
    speedList: ['静止', '慢', '标准', '快'],
    sizeList: ['小', '中', '标准', '大'],
    sizeIndex: 2,
    speedIndex: 2,
  },

  onLoad() {
    // 创建动画实例
    this.animation = wx.createAnimation({
      timingFunction: 'linear', // 匀速动画
    });
    this.bindAnimation();
  },

  bindconfirm(e) {
    this.setData({
      scrollText: e.detail.value
    })
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

    this.setColor(value, 1)
  },

  setColor(value, source) {
    if (source == 1) {
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

  chooseSpeed(e) {
    const {
      index
    } = e.currentTarget.dataset
    this.setData({
      speedIndex: index,
    })
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