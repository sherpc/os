$(function() {
  if (check_labels()) {
    data.forEach(function(elem) {
      container = elem.name + '_container';
      $("body").append('<div id="' + container + '" class="chart"></div>');
      create_chart(container, elem.name, elem);
    });
  } else {
    alert('Invalid label percents!');
  }
});

function check_labels() {
  sum = 0;
  labels.forEach(function(label) {
    sum += label.percent;
  });
  return sum == 100;
}

function total(data) {
  sum = 0;
  labels.forEach(function(label) {
    sum += data[label.id] * label.percent / 100;
  });
  return sum;
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
  labels.forEach(function(label) {
    chart_data.push({
      name: label.name,
      color: '#89a54e',
      y: data[label.id],
      x: 5
    });
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
