function getFarenheits(result){
  farenheits = $.map(result.hourly_forecast, function(hourly, index) {
    return hourly.temp['english'];
  });
  return farenheits;
}

function getHours(result){
  var hours = $.map(result.hourly_forecast, function(hourly, index) {
    return hourly.FCTTIME['hour'];
  });
  return hours;
}

function generateDataSet(labels, data) {
  var weatherData = {
    labels: labels,
    datasets: [
      {
        label: "Hourly Weather for New York",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: data
      }
    ]
  };
  return weatherData;
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({
    url: endpoint,
    success: success
  });
}