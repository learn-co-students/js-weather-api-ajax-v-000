var json = "";

function getFahrenheits(result){
  var forecasts = result.hourly_forecast;
  var temps = [];
  for (var i=0; i < forecasts.length; i++) {
    temps.push(forecasts[i].temp.english);
  };
  return temps;
}

function getHours(result){
  var forecasts = result.hourly_forecast;
  var hours = [];
  for (var i=0; i < forecasts.length; i++) {
    hours.push(forecasts[i].FCTTIME.hour);
  };
  return hours;
}

function generateDataSet(labels, data) {
  var chartData = {
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
      }
    ]
  };

  chartData.datasets[0].data = data;
  return chartData;
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: success
  })
}
