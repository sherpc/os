var chart1;
var john_data = [50, 100, 50, 60];
$(function() {
  chart1 = new Highcharts.Chart({
    chart: {
      renderTo: 'container',
      type: 'column'
    },
    title: {
      text: 'John Marks'
    },
    xAxis: {
      categories: []
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: 'Fruit eaten'
      },
      plotLines: [{
        color: '#FF0000',
         width: 2,
         value: 52
      }]
    },
    plotOptions: {
      column: {
      }
    }, 
    series: [{
      name: 'Seminar work',
      data: [{
        color: '#4572a7',
        y: 50,
        x: 1
      }]
    },{
      name: 'Lab 1',
      data: [{
        color: '#aa4643',
        y: 100,
        x: 2
      }]
    },{
      name: 'Lab 2',
      data: [{
        color: '#aa4643',
        y: 50,
        x: 2
      }]
    },{
      name: 'Exam',
      data: [{
        color: '#80699b',
        y: 60,
        x: 3
      }]
    },{
      name: 'Total',
      data: [{
        color: '#89a54e',
        y: 65,
        x: 4
      }]
    }]
  });
});
