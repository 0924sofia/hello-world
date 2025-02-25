import * as utils from "../../utils/util";
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    show: Boolean,
    showDialog: Boolean,
  },

  options: {
    styleIsolation: "apply-shared"
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabList: ['字号', '颜色', '背景'],
    tabIndex: 0,
    sizeList: ['小', '中', '大', '特大', '超特大'],
    sizeIndex: 2,
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
    toView: '',
    blurRadius: 40,
  },

  /**
   * 组件的方法列表
   */
  methods: {

    bindconfirm(e) {
      this.triggerEvent('bindconfirm',e.detail.value)
    },

    openColorPicker() {
      this.triggerEvent('openColorPicker')
    },

    // 收起
    closeDialog() {
      this.triggerEvent('closeDialog')
    },

    openSetting() {
      this.triggerEvent('openSetting')
    },

    pickColor(e) {
      this.setData({
        colorPickValue: e.detail.color,
      })
      this.triggerEvent('setColor', {
        color: e.detail.color,
        blurRadius: this.data.blurRadius,
        tabIndex: this.data.tabIndex
      })
    },

    chooseColor(e) {
      const {
        index,
        value
      } = e.currentTarget.dataset
      this.setData({
        colorIndex: index,
        fontColor: value,
      })
      if (index > 5) {
        this.setData({
          toView: "color" + index
        })
      }

      this.triggerEvent('setColor', {
        color: value,
        blurRadius: this.data.blurRadius,
        tabIndex: this.data.tabIndex,
      })
    },

    changeTab(e) {
      const {
        index
      } = e.currentTarget.dataset
      this.setData({
        tabIndex: index
      })
      this.triggerEvent('changeTab', index)
    },

    chooseSize(e) {
      const {
        index
      } = e.currentTarget.dataset
      this.setData({
        sizeIndex: index
      })
      let fontSize = 250,
        blurRadius = 40
      switch (index) {
        case 0:
          fontSize = 50
          break;
        case 1:
          fontSize = 100
          blurRadius = 50
          break;
        case 2:
          fontSize = 150
          blurRadius = 60
          break;
        case 3:
          fontSize = 200
          blurRadius = 70
          break;
        case 4:
          fontSize = 250
          blurRadius = 80
          break;
      }
      this.setData({
        blurRadius,
      })
      this.triggerEvent('chooseSize', {
        fontSize,
        blurRadius
      })
    },

    confirmSetting() {
      const _rgb = utils.getComplementaryColor(this.data.bgColor)
      this.setData({
        show: false,
        tabIndex: 0,
        confirmStyle: `border:2rpx solid ${_rgb}`,
        iconStyle: `color:${_rgb}`,
      })
    },

  }
})