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

function prepare_totals(data) {
  totals = [];
  labels.forEach(function(label) {
    total = data[label.id] * label.percent / 100;
    totals[label.id] = total;
    totals['total'] += total;
  });
  return totals;
}

function prepare_chart_data(data,totals) {
  chart_data = [];
  labels.forEach(function(label) {
    chart_data.push({
      name: label.name,
      color: label.color,
      y: data[label.id],
    });
  });
  labels.reverse().forEach(function(label) {
    chart_data.push({
      name: label.name,
      color: label.color,
      x: 5,
      y: totals[label.id],
    });
  });
  labels.reverse();
  return chart_data;
}

function create_chart(render_to,name,data) {
  totals = prepare_totals(data);
  chart_data = prepare_chart_data(data,totals);
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
        stacking: 'normal'
      }
    }, 
    series: [{
      name: 'Marks',
      data: chart_data,
      stack: 0
    }]
  });
}
