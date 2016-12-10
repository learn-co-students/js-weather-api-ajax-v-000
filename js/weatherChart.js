function getFahrenheits(result){
  var temps = [];
  for (let i in result.hourly_forecast){
    temps.push(result.hourly_forecast[i].temp.english)
  }
  return temps;
}

function getHours(result){
  // Your code goes here
  var hours = [];
  for (let a in result.hourly_forecast){
    hours.push(result.hourly_forecast[a].FCTTIME.hour);
  }
  return hours;
}

function generateDataSet(labels, data) {
  // Your code goes here
  var chart = {
    labels: labels,
    datasets: [{
      label: 'Hourly Weather for New York',
      fillColor : 'rgba(220,220,220,0.2)',
      strokeColor : 'rgba(220,220,220,1)',
      pointColor : 'rgba(220,220,220,1)',
      pointStrokeColor : '#fff',
      pointHighlightFill : '#fff',
      pointHighlightStroke : 'rgba(220,220,220,1)',
      data: data
    }]
  }
  return chart;
}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: success
  })
}
