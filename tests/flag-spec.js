var expect = require('expect.js'),
    sinon = require('sinon'),
    $ = require('jquery');
    
var Canvas = require('achart-canvas'),
  Series = require('achart-series'),
  Flag = require('../src/flag'),
  PlotRange = require('achart-plot').Range,
  Axis = require('achart-axis'),
  Simulate = require('event-simulate'),
  NAxis = Axis.Number,
  CAxis = Axis.Category;

  $('<div id="f2"></div>').prependTo('body');

describe('flag 生成',function(){

  var canvas = new Canvas({
    id : 'f2',
    width : 900,
    height : 500
  });



  var plotRange = new PlotRange({x : 50,y : 400}, {x : 850, y : 50}),
    xAxis = canvas.addGroup(CAxis,{
      plotRange : plotRange,
      categories : [1,2,3,4,5,6,7,8,9,10,11,12],
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
  var series = canvas.addGroup(Series.Line,{
    id:'series1',
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
    duration: 1000,
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
    flags:{
        flag: {
            distance: -15,
            line: {
                'stroke': '#000000',
                'stroke-width': 1
            },
            shapeType: 'rect',
            shapeCfg: {
                stock: '#ccc',
                width: 22,
                height: 24
            },
            title: 'A',
            titleCfg: {
                rotate: 90,
                fill: 'blue',
                'font-size': 16,
                'font-weight': 'bold'
            }
        }
    },
    animate: true,
    duration: 1000,
    onSeries : 'series1',
    data: [
      {
          flag:{
            title: 'B'
          },
          x : 1
      },{
          x : 2
      },{

          x : 2
      },{
          x : 4
      },{
          x : 1
      }
    ]
  });

    var series2 = canvas.addGroup(Flag,{
        xAxis : xAxis,
        yAxis : yAxis,
        color : '#2f7ed8',
        autoPaint : false,
        flags:{
            flag: {
                distance: -15,
                line: {
                    'stroke': '#000000',
                    'stroke-width': 1
                },
                shapeType: 'rect',
                shapeCfg: {
                    stock: '#ccc',
                    width: 22,
                    height: 24
                },
                title: 'A',
                titleCfg: {
                    rotate: 90,
                    fill: 'blue',
                    'font-size': 16,
                    'font-weight': 'bold'
                }
            }
        },
        animate: false,
        duration: 1000,
        data: [
            {
                flag:{
                    title: 'B'
                },
                x : 1
            },{
                x : 2
            },{

                x : 2
            },{
                x : 4
            },{
                x : 1
            }
        ]
    });

  series.paint();

  describe('test create',function(){
    it('create',function(){
        series1.paint();
        series2.paint();
    });
    it('flag items',function(){
        setTimeout(function(){
            expect(series1.get('children')[0].get('children').length).to.be(5);
        },1000)
    });
  });

  describe('operation',function(){
    it('change',function(){
        setTimeout(function(){
            series1.changeData([
                {
                    flag:{
                        title: 'B'
                    },
                    x : 4
                },{
                    x : 5
                },{

                    x : 6
                },{
                    x : 4
                }
            ],true);
        },1000)
    });
  });

});


