# bubble

---

冒泡图demo

---

## bubble

````html
<div id="b1">

</div>

````

````javascript

seajs.use(['index','achart-axis','achart-canvas','achart-plot'], function(Series,Axis,Canvas,Plot) {
    var canvas = new Canvas({
        id : 'b1',
        width : 900,
        height : 500
      });

      var plotRange = new Plot.Range({x : 50,y : 400}, {x : 850, y : 50}),
        xAxis = canvas.addGroup(Axis.Number,{
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

      var series = canvas.addGroup(Series.Bubble,{
        xAxis : xAxis,
        yAxis : yAxis,
        color : '#2f7ed8',
        circle : {
          'fill-opacity' : .5
        },
        activeCircle : {
          stroke : "red"
        },
        data: [[97,36,79],[94,74,60],[68,76,58],[64,87,56],[68,27,73],[74,99,42],[7,93,87],[51,69,40],[38,23,33],[57,86,31]]
      });

      series.paint();
})

````