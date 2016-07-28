function getFarenheits(result){
  var temperatures = [];
  $.each(result.hourly_forecast, function(index, forecast){
    temperatures.push(forecast.temp.english);
  });
  return temperatures;
}

function getHours(result){
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
        label: "Hourly Weather for New York",
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
