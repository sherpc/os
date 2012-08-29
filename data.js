var data = [{
  name: "John",
  seminar: 50,
  lab1:100,
  lab2:50,
  exam:60
},{
  name: "Petr",
  seminar: 100,
  lab1:0,
  lab2:0,
  exam:100
},{
  name: "Jane",
  seminar: 90,
  lab1:80,
  lab2:75,
  exam:80
}];

var labels = [{
  id: 'seminar',
  name: 'Seminar work',
  percent: 10,
  color: '#4572a7'
},{
  id: 'lab1',
  name: 'Lab 1',
  percent: 20,
  color: '#89a54e'
},{
  id: 'lab2',
  name: 'Lab 2',
  percent: 20,
  color: '#89a54e'
},{
  id: 'exam',
  name: 'Exam',
  percent: 50,
  color: '#80699b'
}];

/*
 
  labels.forEach(function(label) {
    chart_data.push({
      name: label.name,
      color: '#89a54e',
      y: data[label.id],
      x: 5
    });
  });
 */
