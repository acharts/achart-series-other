/**
 * @fileOverview 气泡图
 * @ignore
 */


var 
  Cartesian = require('achart-series').Cartesian,
  ActiveGroup = require('achart-actived').Group,
  Util = require('achart-util');

/**
 * @class Chart.Series.Bubble
 * 冒泡图
 */
var Bubble = function(cfg){
  Bubble.superclass.constructor.call(this,cfg);
};

Bubble.ATTRS = {
  elCls : 'x-chart-bubble',
  type : 'bubble',
  /**
   * 气泡的配置信息
   * @type {Object}
   */
  circle : {},
  /**
   * 激活气泡的状态
   * @type {Object}
   */
  activeCircle : {},

  legendType : 'circle',

  /**
   * 如果传入的数据是对象那么这个字段标示半径代表的字段
   * @type {String}
   */
  radiusField : 'r',
  
  animate : true,

  /**
   * 格式化半径函数
   */
  radiusFormatter : function  (r) {
    return Math.pow(r,.75);
  },

  autoPaint : false,

  stickyTracking : false
};

Util.extend(Bubble,Cartesian);

Util.mixin(Bubble,[ActiveGroup]);

Util.augment(Bubble,{

  /**
   * @protected
   * 处理颜色
   */
  processColor : function(){
    var _self = this,
      color = _self.get('color');
    if(color){
      var  circle = _self.get('circle');
      if(circle){
        Util.trySet(circle,'stroke',color);
        Util.trySet(circle,'fill',color);
      }
    }
  },
  renderUI : function(){
    Bubble.superclass.renderUI.call(this);
    this._renderGroup();
  },
  //渲染圆
  draw : function(points){
    var _self = this;
    
    Util.each(points,function(point){
      _self.addBubble(point);
    });
  },
  /**
   * @protected
   * 内部图形发生改变
   */
  changeShapes : function(){
    var _self = this,
      points = _self.getPoints(),
      items = _self.getItems();

    Util.each(items,function(item,index){
      var point = points[index];
      if(point){
        item.animate({
          cx : point.x,
          cy : point.y
        },_self.get('changeDuration'));
        item.set('point',point);
      }
    });
    var count = items.length;
    if(points.length < count){
      for(var i = count-1; i >= points.length; i--){
        items[i].remove();
      }
    }
    if(points.length > count){
      for(var i = count; i < points.length ; i ++){
        _self.addBubble(points[i]);
      }
    }

  },
  /**
   * 获取内部的圆
   * @return {Array} 图形圆的集合
   */
  getItems : function(){
    return this.get('group').get('children');
  },
  /**
   * @protected
   * 获取可以被激活的元素
   * @return {Chart.Actived[]} 可以被激活的元素集合
   */
  getActiveItems : function(){
    return this.getItems();
  },
  _renderGroup : function(){
    var _self = this,
      group = _self.addGroup();
    _self.set('group',group);
  },
  //设置激活状态
  setItemActived : function(item,actived){
    var _self = this,
      circle = _self.get('circle'),
      activedCfg = _self.get('activeCircle');
    if(actived){
      item.attr(activedCfg);
      item.set('actived',true);
    }else{
      item.attr(circle);
      item.set('actived',false);
    }
  },
  //获取当前定位的点
  getTrackingInfo : function(){
    var _self = this,
      activedCircle = _self.getActived();
    return activedCircle && activedCircle.get('point');
  },
  /**
   * @protected
   * 是否激活
   * @param {Chart.Actived} item 可以被激活的元素
   * @return {Chart.Actived[]} 可以被激活的元素集合
   */
  isItemActived : function(item){
    return item.get('actived');
  },
  //添加冒泡
  addBubble : function(point){
    var _self = this,
      circle = _self.get('circle'),
      r = 5, //默认5
      radius,
      radiusField = _self.get('radiusField'),
      cfg = Util.mix({},circle),
      shape;
    if(point.obj){
      r = point.obj[radiusField];
    }
    if(point.arr){
      r = point.arr[2];
      if(r == null){
        r = point.arr[1];
      }
    }
    radius = _self._getRadius(r);
    
    cfg.cx = point.x;
    cfg.cy = point.y;
    if(_self.get('animate') && Util.svg){
      cfg.r = 0;
      shape = _self.get('group').addShape('circle',cfg);
      shape.animate({
        r : radius
      },_self.get('duration'));
    }else{
      cfg.r = radius;
      shape = _self.get('group').addShape('circle',cfg);
    }

    if(_self.get('labels')){
      _self.addLabel(point.value,point);
    }

    shape.set('point',point);
  },
  _getRadius : function(r){
    var _self = this,
      radiusFormatter = _self.get('radiusFormatter');
    if(radiusFormatter){
      return radiusFormatter(r);
    }
    return r;
  },
   //鼠标hover
  bindMouseOver : function(){
    var _self = this
    _self.get('group').on('mouseover',function(ev){
      var target = ev.target,
        shape = target.shape;
      _self.setItemActived(shape,true);
    });
  }, 
  //鼠标hover
  bindMouseOut : function(){
    var _self = this;
    
    _self.get('group').on('mouseout',function(ev){
      var target = ev.target,
        shape = target.shape;
      _self.setItemActived(shape,false);
    });
  }
});

module.exports = Bubble;
