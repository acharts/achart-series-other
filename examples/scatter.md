# scatter

---

散点图demo

---

## scatter

````html
<div id="s3">

</div>

````

````javascript

seajs.use(['index','achart-axis','achart-canvas','achart-plot'], function(Series,Axis,Canvas,Plot) {
    var canvas = new Canvas({
        id : 's3',
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

    var series = canvas.addGroup(Series.Scatter,{
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

    var series1 = canvas.addGroup(Series.Scatter,{
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
})

````