function getFarenheits(result){
  temps = [];
  $.each(result.hourly_forecast, function(){
    temps.push(this.temp.english);
  });
  return temps;
}

function getHours(result){
  hours = []
  $.each(result.hourly_forecast, function(){
    hours.push(this.FCTTIME.hour);
  })
  return hours;
}

function generateDataSet(labels, data) {
  var weatherData = {};
  weatherData.labels = labels;
  weatherData.datasets = [
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
      return weatherData;
}

function makeAjaxRequest(endpoint, success) {
  $.ajax ({
    url: endpoint,
    dataType: 'jsonp',
    success: success
  });
}