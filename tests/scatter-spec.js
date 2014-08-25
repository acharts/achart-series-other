var expect = require('expect.js'),
    sinon = require('sinon'),
    $ = require('jquery');
    
var Canvas = require('achart-canvas'),
  Series = require('../src/scatter'),
  PlotRange = require('achart-plot').Range,
  Axis = require('achart-axis'),

  NAxis = Axis.Number,
  CAxis = Axis.Category;

  $('<div id="s1"></div>').prependTo('body');



describe('scatter 序列生成',function(){

  var canvas = new Canvas({
    id : 's1',
    width : 900,
    height : 500
  });

  var plotRange = new PlotRange({x : 50,y : 400}, {x : 850, y : 50}),
    xAxis = canvas.addGroup(NAxis,{
      plotRange : plotRange,
      tickOffset : 20,
      min : 0,
      tickInterval : 10,
      max : 100,
      labels : {
        label : {
          y : 12
        }
      }
    });

  var yAxis = canvas.addGroup(NAxis,{
      plotRange : plotRange,
      line : null,
      tickLine : null,
      grid : {
        line : {
          stroke : '#c0c0c0'
        }
      },
      title : {
        text : 'xsxxxxx',
        font : '16px bold',
        fill : 'blue',
        rotate : 90,
        x : -30
      },
      min : -10,
      max : 120,
      position:'left',
      tickInterval : 20,
      labels : {
        label : {
          x : -12
        }
      }
    });

  canvas.sort();

  var series = canvas.addGroup(Series,{
    xAxis : xAxis,
    yAxis : yAxis,
    color : '#2f7ed8',
    markers : {
      marker : {
        radius : 5,
        symbol : 'circle',
        'stroke-width' : 1,
        'fill-opacity' : .5
      },
      actived : {
          radius : 8,
          stroke: '#fff'
      }
    },
    data: [[97,36,79],[94,74,60],[68,76,58],[64,87,56],[68,27,73],[74,99,42],[7,93,87],[51,69,40],[38,23,33],[57,86,31]]
  });

  series.paint();

  var series1 = canvas.addGroup(Series,{
    xAxis : xAxis,
    yAxis : yAxis,
    
    color : "#910000",
    markers : {
      marker : {
        radius : 5,
        symbol : 'diamond',
        'stroke-width' : 1,
        'fill-opacity' : .5
      },
      actived : {
          radius : 8,
          stroke: '#fff'
      }
    },
    data: [[25,10,87],[2,75,59],[11,54,8],[86,55,93],[5,3,58],[90,63,44],[91,33,17],[97,3,56],[15,67,48],[54,25,81]]
  });

  series1.paint();


  describe('test create',function(){
    it('create',function(){
      expect(series.get('markersGroup')).not.to.be(undefined);
      expect(series.get('markersGroup').getCount()).to.be(series.get('data').length);
    });
    it('bubble items',function(){
      var firstItem = series.get('markersGroup').getChildAt(5),
        data1 = series.get('data')[5];
      expect(firstItem.attr('x')).to.be(xAxis.getOffset(data1[0]));
      expect(firstItem.attr('y')).to.be(yAxis.getOffset(data1[1]));
    });
  });

  describe('operation',function(){
    it('change',function(){

    });

    it('active',function(){

    });

    it('clear active',function(){

    });


  });
});
