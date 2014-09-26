# 冒泡图

---

冒泡图

---

## 目录

  * 简介
  * 冒泡图的构成
  * 数据处理

### 简介

  * 冒泡图(Series.Bubble)，是一种根据传入的数值在相应位置画出相应大小气泡的一直图表序列
  * 折线图必须在坐标轴中，无论是笛卡尔坐标还是极坐标，都是通过x轴，Y轴将数据转换成画布上的坐标，进行渲染

### 冒泡图的构成

  * 冒泡图每一个series都是由一个个circle组成的一个[group](http://spmjs.io/docs/achart-canvas/wiki/3-group.html)
  * 查看示例：[示例](../examples/bubble.html)

### 数据处理

  * 冒泡图Series.Bubble继承 Series.Cartesian 所以不需要覆写处理数据的函数，支持下列这种数据格式

    - 单个值是数组的格式，分别是x，y已经所代表气泡大小的值 如：  data: [[47,47,21],[20,12,4],[6,76,91]]

  * 查看示例：[示例](../examples/bubble.html)

