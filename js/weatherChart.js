function getFahrenheits(data){
  var fahrenheits = [];

  data["hourly_forecast"].forEach(function(hourlyWeather, index){
    fahrenheits.push(hourlyWeather.temp.english);
  });

  return fahrenheits;
}

function getHours(data){
  var hours = [];

  data["hourly_forecast"].forEach(function(hourlyWeather, index){
    hours.push(hourlyWeather.FCTTIME.hour);
  });

  return hours;
}

function generateDataSet(labels, data) {
  // Your code goes here
  var dataSet = {}
  dataSet.labels = labels;
  dataSet.datasets = [{
    label: "Hourly Weather for New York",
    fillColor: "rgba(220,220,220,0.2)",
    strokeColor: "rgba(220,220,220,1)",
    pointColor: "rgba(220,220,220,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(220,220,220,1)",
    data: data
  }]

  return dataSet;
}

function makeAjaxRequest(endpoint, success) {
  $.ajax({
    url: endpoint,
    dataType: "jsonp",
    success: success
  });
}

