var expect = require('expect.js'),
    sinon = require('sinon'),
    $ = require('jquery');
    
var Canvas = require('achart-canvas'),
  Series = require('achart-series'),
  Flag = require('achart-flag'),
  PlotRange = require('achart-plot').Range,
  Axis = require('achart-axis'),
  Simulate = require('event-simulate'),
  NAxis = Axis.Number,
  CAxis = Axis.Category;

  $('<div id="f2"></div>').prependTo('body');



describe('scatter 序列生成',function(){

  var canvas = new Canvas({
    id : 'f2',
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
    labels : {
      label : {
        y : -15
      }
    },
    color : '#2f7ed8',
    line : {
      'stroke-width': 2,
      'stroke-linejoin': 'round',
      'stroke-linecap': 'round'
    },
    lineActived : {
      'stroke-width': 3
    },
    animate : true,
    markers : {
      marker : {
        
        symbol : 'circle',
        radius : 4
      },
      actived : {
        radius : 6,
        stroke: '#fff'
      }
    },
    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
  });

  var series1 = canvas.addGroup(Flag,{
    xAxis : xAxis,
    yAxis : yAxis,
    color : '#2f7ed8',
    autoPaint : false,
    onSeries : series,
    data: [
      {
          x : '一月'
      },{
          x : '一月'
      },{
          x : '十一月'
      },{
          x : '十二月'
      }
    ]
  });

  series.paint();

  describe('test create',function(){
    it('create',function(done){
     
    });
    it('flag items',function(){
      
    });
  });

  describe('operation',function(){
    it('change',function(done){

     
    });

    it('active',function(){
      
    });

  });
});



describe('自定义 scatter',function(){

  var canvas = new Canvas({
    id : 'f2',
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
    labels : {
      label : {
        y : -15
      }
    },
    color : '#2f7ed8',
    line : {
      'stroke-width': 2,
      'stroke-linejoin': 'round',
      'stroke-linecap': 'round'
    },
    lineActived : {
      'stroke-width': 3
    },
    animate : true,
    markers : {
      marker : {
        
        symbol : 'circle',
        radius : 4
      },
      actived : {
        radius : 6,
        stroke: '#fff'
      }
    },
    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
  });

  var series1 = canvas.addGroup(Flag,{
    xAxis : xAxis,
    yAxis : yAxis,
    color : '#2f7ed8',
    autoPaint : false,
    onSeries : series,
    data: [
      {
          x : '一月'
      },{
          x : '一月'
      },{
          x : '十一月'
      },{
          x : '十二月'
      }
    ]
  });

  series.paint();

  describe('test create',function(){
    it('create',function(done){
     
    });
    it('flag items',function(){
      
    });
  });

  describe('operation',function(){
    it('change',function(done){

     
    });

    it('active',function(){
      
    });


  });
});