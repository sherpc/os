$(function() {
  data.forEach(function(elem) {
    container = elem.name + '_container';
    $("body").append('<div id="' + container + '" class="chart"></div>');
    create_chart(container, elem.name, elem);
  });
});

function total(data) {
  return (data['seminar'] * 10 + data['lab1'] * 20 + data['lab2'] * 20 + data['exam'] * 50) / 100;
}

function prepare_chart_data(data) {
  data['total'] = total(data);
  chart_data = [];
  labels.forEach(function(label) {
    chart_data.push({
      name: label.name,
      color: label.color,
      y: data[label.id],
    });
  });
  chart_data.push({
    name: 'Total',
    color: '#89a54e',
    y: data['total'],
  });
  return chart_data;
}

function create_chart(render_to,name,data) {
  chart_data = prepare_chart_data(data);
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
      data: chart_data
    }]
  });
}
