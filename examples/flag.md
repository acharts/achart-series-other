# flag

---

标记图demo

---

## flag

````html
<div id="f2">

</div>

````

````javascript

seajs.use(['index','achart-axis','achart-canvas','achart-plot'], function(Series,Axis,Canvas,Plot) {
    var canvas = new Canvas({
        id : 'f2',
        width : 900,
        height : 500
      });


  var plotRange = new Plot.Range({x : 50,y : 400}, {x : 850, y : 50}),
    xAxis = canvas.addGroup(Axis.Category,{
      plotRange : plotRange,
      categories : [1,2,3,4,5,6,7,8,9,10,11,12],
      labels : {
        label : {
          y : 12
        }
      }
    });

  var yAxis = canvas.addGroup(Axis.Number,{
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

  var series1 = canvas.addGroup(Series.Flag,{
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
        duration: 400,
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

  var series2 = canvas.addGroup(Series.Flag,{
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
                  shapeType: 'circle',
                  shapeCfg: {
                      stock: '#ccc',
                      width: 22,
                      height: 24,
                      r: 11
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
          data: [
                {
                    flag:{
                      title: 'A'
                    },
                    x : 5
                },{
                    flag:{
                      title: 'B'
                    },
                    x : 6
                },{
                    flag:{
                      title: 'C'
                    },
                    x : 7
                },{
                    flag:{
                      title: 'D'
                    },
                    x : 8
                },{
                    flag:{
                      title: 'E'
                    },
                    x : 9
                }
              ]
    });
    series.paint();
    series1.paint();
    series2.paint();
})

````