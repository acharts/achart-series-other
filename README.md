# achart-series-other [![spm version](http://spmjs.io/badge/achart-series-other)](http://spmjs.io/package/achart-series-other)

---

图表序列扩展，本模块包含不常用的图表类型

  * 冒泡图 Series.Bubble
  * 标记图 Series.Flag
  * 散点图 Series.Scatter

文档

  * [wiki 文档](wiki/)

---


## Install

```
$ spm install achart-series-other --save
```

## Usage

```js
var achartSeriesOther = require('achart-series-other');
// use achartSeriesOther
```


## Bubble

  * 冒泡图，继承自[Cartesian](http://spmjs.io/docs/achart-series/#cartesian)

### 配置项

  * circle 气泡的配置信息，[cicle配置](http://spmjs.io/docs/achart-canvas/#shape-基类)
  * activeCircle 激活气泡的配置信息，[cicle配置](http://spmjs.io/docs/achart-canvas/#shape-基类)

## Flag

  * 标记图，继承自[Cartesian](http://spmjs.io/docs/achart-series/#cartesian)

### 配置项

  * flags 标记的配置信息，[flags配置](http://spmjs.io/docs/achart-flags/#flags)
  * onSeries 标记的series的Id

## Scatter

  * 散点图，继承自[Cartesian](http://spmjs.io/docs/achart-series/#cartesian)

### 配置项

  * 无


