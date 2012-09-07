$(function() {
  url = '/json/' + $("#email").html();
  $.getJSON(url, function(result) {
    $("#loading").hide();
    data = result;
    if (check_labels()) {
      data.forEach(function(elem) {
        container = 'container_' + Math.random();
        $("#charts").append('<div id="' + container + '" class="chart"></div>');
        create_chart(container, elem.name, elem);
      });
      $("#charts").append('<div class="cb"></div>');
    } else {
      alert('Invalid label percents!');
    }
  });
});

function check_labels() {
  sum = 0;
  labels.forEach(function(label) {
    sum += label.percent;
  });
  return sum == 100;
}

function prepare_totals(data) {
  totals = {total: 0};
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

function prepare_y_axis(totals) {
  y_axis = {
      min: 0,
      max: 100,
      title: {
        text: 'Mark'
      },
      plotLines: [{
        color: '#FF0000',
         width: 1,
         value: 50,
         zIndex: 3
      }]
  };
  return y_axis;
}

function create_chart(render_to,name,data) {
  totals = prepare_totals(data);
  chart_data = prepare_chart_data(data,totals);
  y_axis = prepare_y_axis(totals);
  new Highcharts.Chart({
    chart: {
      renderTo: render_to,
      marginRight: 50
    },
    credits: {
      enabled: false
    },
    legend: {
      enabled: false
    },
    title: {
      text: name
    },
    xAxis: {
      categories: [],
      labels: {
        enabled: false
      },
    },
    yAxis: y_axis,
    plotOptions: {
      column: {
        stacking: 'normal'
      }
    }, 
    series: [{
      name: 'Marks',
      data: chart_data,
      type: 'column',
      stack: 0,
      animation: false,
    },{
      name: 'Total',
      marker: { enabled: false },
      data: [{
        dataLabels: {
          enabled: true,
          align: 'left',
          x: 15,
          y: 4,
          style: {
            fontWeight: 'bold'
          }
        },
        y: totals['total'],
        x: 5
      }],
      animation: false,
    }]
  });
}
