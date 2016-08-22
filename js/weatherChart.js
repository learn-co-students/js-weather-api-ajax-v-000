function getFarenheits(result){
  // Your code goes here
  var temps = []
  $.each(result.hourly_forecast, function(index, forecast){
    temps.push(forecast.temp.english);
  });
  return temps;
}

function getHours(result){
  // Your code goes here
  var hours = []
  $.each(result.hourly_forecast, function(index, forecast){
    hours.push(forecast.FCTTIME.hour);
  });
  return hours;
}

function generateDataSet(labels, data) {
  // Your code goes here
  var data = {
    labels: labels,
    datasets: [{
      label: "Hourly Weather for New York",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: data
    }]
  };
  return data;
}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: success
  });
}
