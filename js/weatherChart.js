function getFarenheits(result){
  // Your code goes here
  var temperature = [];
  $.each(result.hourly_forecast, function(index, forecast){
    temperature.push(forecast.temp.english);
  });
  return temperature;
}

function getHours(result){
  // Your code goes here
  var hours = [];
  $.each(result.hourly_forecast, function(index, forecast){
    hours.push(forecast.FCTTIME.hour);
  });
  return hours;
}

function generateDataSet(labels, data) {
  var data = {
    labels: labels,
    datasets: [{
        data: data,
        label: "Hourly Weather for NY",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)"
    }]
  }
  return data;
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: success
  });
}
