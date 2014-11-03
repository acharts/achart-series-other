var expect = require('expect.js'),
    sinon = require('sinon'),
    $ = require('jquery');
    
var Canvas = require('achart-canvas'),
  Series = require('../src/scatter'),
  PlotRange = require('achart-plot').Range,
  Axis = require('achart-axis'),
  Simulate = require('event-simulate'),
  NAxis = Axis.Number,
  CAxis = Axis.Category;

  $('<div id="s2"></div>').prependTo('body');



describe('scatter 序列生成',function(){

  var canvas = new Canvas({
    id : 's2',
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
    data: [[97,36],[94,74],[68,76],[64,87],[68,27],[74,99],[7,93],[51,69],[38,23],[57,86]]
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
    data: [[25,10],[2,75],[11,54],[86,55],[5,3],[90,63],[91,33],[97,3],[15,67],[54,25]]
  });

  series1.paint();


  describe('test create',function(){
    it('create',function(done){

      setTimeout(function(){
        expect(series.get('markersGroup')).not.to.be(undefined);
        expect(series.get('markersGroup').getCount()).to.be(series.get('data').length);
        done();
      },1200);
     
    });
    it('bubble items',function(){
      var firstItem = series.get('markersGroup').getChildAt(5),
        data1 = series.get('data')[5];
      expect(firstItem.attr('x')).to.be(xAxis.getOffset(data1[0]));
      expect(firstItem.attr('y')).to.be(yAxis.getOffset(data1[1]));
    });
  });

  describe('operation',function(){
    it('change',function(done){

      var data = [[64.5, 70.0], [92.0, 101.6], [75.5, 63.2],  
                      [71.2, 79.1], [81.6, 78.9], [67.4, 67.7], [81.1, 66.0], [77.0, 68.2],   
                      [74.5, 63.9], [77.5, 72.0], [70.5, 56.8], [82.4, 74.5], [97.1, 90.9],   
                      [80.1, 93.0], [75.5, 80.9], [80.6, 72.7], [84.4, 68.0], [75.5, 70.9],   
                      [80.6, 72.5], [77.0, 72.5], [77.1, 83.4], [81.6, 75.5], [76.5, 73.0],   
                      [75.0, 70.2], [74.0, 73.4], [65.1, 70.5], [77.0, 68.9], [92.0, 102.3],  
                      [76.5, 68.4], [69.4, 65.9], [82.1, 75.7], [79.8, 84.5]
                  ];
      setTimeout(function(){
        series.changeData(data,true);
        done();
      },1000);
    });

    it('active',function(){
      var item = series.get('markersGroup').getFirst();

      Simulate.simulate(item.get('node'),'mouseover');

      expect(item.get('actived')).to.be(true);

      expect(series.getTrackingInfo()).to.be(item.get('point'));

      Simulate.simulate(item.get('node'),'mouseout');

      expect(item.get('actived')).to.be(false);
    });


  });
});
