var expect = require('expect.js'),
    sinon = require('sinon'),
    $ = require('jquery');
    
var Canvas = require('achart-canvas'),
  Series = require('../src/bubble'),
  PlotRange = require('achart-plot').Range,
  Simulate = require('event-simulate'),
  Axis = require('achart-axis'),

  NAxis = Axis.Number,
  CAxis = Axis.Category;

  $('<div id="b1"></div>').prependTo('body');



describe('测试序列生成',function(){

  var canvas = new Canvas({
    id : 'b1',
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
    circle : {
      'fill-opacity' : .5
    },
    labels : {
      label : {
        'font-size' : 12
      }
    },
    activeCircle : {
      stroke : "red"
    },
    data: [[97,36,79],[94,74,60],[68,76,58],[64,87,56],[68,27,73],[74,99,42],[7,93,87],[51,69,40],[38,23,33],[57,86,31]]
  });

  series.paint();

  var series1 = canvas.addGroup(Series,{
    xAxis : xAxis,
    yAxis : yAxis,
    circle : {
      'fill-opacity' : .5
    },
    color : "#910000",
    data: [[25,10,87],[2,75,59],[11,54,8],[86,55,93],[5,3,58],[90,63,44],[91,33,17],[97,3,56],[15,67,48],[54,25,81]]
  });

  series1.paint();


  describe('test create',function(){

    it('create',function(done){
      setTimeout(function(){
        expect(series.get('group')).not.to.be(undefined);
        expect(series.get('group').getCount()).to.be(series.get('data').length);
        done();
      },1000);
      
    });
    it('bubble items',function(){
      var firstItem = series.get('group').getChildAt(5),
        data1 = series.get('data')[5];
      expect(firstItem.attr('cx')).to.be(xAxis.getOffset(data1[0]));
      expect(firstItem.attr('cy')).to.be(yAxis.getOffset(data1[1]));
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
                      [76.5, 68.4], [69.4, 65.9], [82.1, 75.7], [79.8, 84.5]];
      series.changeData(data,true);
      setTimeout(function(){
        expect(series.get('group').getCount()).to.be(data.length);
        done();
      },1000);
      
    });

    it('continue change',function (done) {
      
      var data = [[97,36,79],[94,74,60],[68,76,58],[64,87,56],[68,27,73],[74,99,42],[7,93,87],[51,69,40],[38,23,33],[57,86,31]];

      series.changeData(data,true);
      setTimeout(function(){
        expect(series.get('group').getCount()).to.be(data.length);
        done();
      },1000);
    });

    it('active',function(){
      var item = series.get('group').getFirst();

      Simulate.simulate(item.get('node'),'mouseover');

      expect(item.get('actived')).to.be(true);

      expect(series.getTrackingInfo()).to.be(item.get('point'));

      Simulate.simulate(item.get('node'),'mouseout');

      expect(item.get('actived')).to.be(false);
    });
  });
});



describe('测试序列生成',function(){

  var canvas = new Canvas({
    id : 'b1',
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
    circle : {
      'fill-opacity' : .5
    },
    labels : {
      label : {
        'font-size' : 12
      }
    },
    activeCircle : {
      stroke : "red"
    },
    data: [
      {x : 97,y:36,r:79,name : '1'},
      {x : 94,y:74,r:60,name : '2'},
      {x : 68,y:76,r:58,name : '3'},
      {x : 64,y:87,r:56,name : '4'},
      {x : 68,y:27,r:73,name : '5'},
      {x : 74,y:99,r:42,name : '6'},
      {x : 7,y:93,r:87,name : '7'},
      {x : 51,y:69,r:40,name : '8'},
      {x : 38,y:23,r:33,name : '9'},
      {x : 57,y:86,r:31,name : '10'}
    ]
  });

  series.paint();



  describe('test create',function(){

    it('create',function(done){
      setTimeout(function(){
        expect(series.get('group')).not.to.be(undefined);
        expect(series.get('group').getCount()).to.be(series.get('data').length);
        done();
      },1000);
      
    });
    
  });

});

/**/