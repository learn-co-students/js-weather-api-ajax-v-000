function getFarenheits(result){
  // Your code goes here
  var temps = $.map(result.hourly_forecast, function(time) {
    return time.temp.english;
  });
  return temps;
}

function getHours(result){
  // Your code goes here
  var hours = $.map(result.hourly_forecast, function(time) {
    return time.FCTTIME.hour;
  });
  return hours;
}

function generateDataSet(labels, data) {
  // Your code goes here
  var dataset = {
    labels: labels,
    datasets: [
      {
        label: 'Hourly Weather for New York',
        fillColor: 'rgba(220,220,220,0.2)',
        strokeColor: 'rgba(220,220,220,1)',
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: data
      }
    ]
  }
  return dataset;
}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: success
  });
}
