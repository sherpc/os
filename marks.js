var john_data = { 
  seminar: 50,
  lab1:100,
  lab2:50,
  exam:60
};
var petr_data = { 
  seminar: 100,
  lab1:0,
  lab2:0,
  exam:100
};
$(function() {
  create_chart('container', 'John', john_data);
  create_chart('container2', 'Petr', petr_data);
});

function total(data) {
  return (data['seminar'] * 10 + data['lab1'] * 20 + data['lab2'] * 20 + data['exam'] * 50) / 100;
}

function create_chart(render_to,name,data) {
  data['total'] = total(data);
  new Highcharts.Chart({
    chart: {
      renderTo: render_to,
      type: 'column'
    },
    title: {
      text: name + ' marks'
    },
    xAxis: {
      categories: []
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: 'Mark'
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
      name: 'Marks',
      data: [{
        name: 'Seminar work',
        color: '#4572a7',
        y: data['seminar'],
      },{
        name: 'Lab 1',
        color: '#aa4643',
        y: data['lab1'],
      },{
        name: 'Lab 2',
        color: '#aa4643',
        y: data['lab2'],
      },{
        name: 'Exam',
        color: '#80699b',
        y: data['exam'],
      },{
        name: 'Total',
        color: '#89a54e',
        y: data['total'],
        x: 5
      }]
    }]
  });
}
