function getFarenheits(result){
  var response = result.hourly_forecast;
  var farenheitsArray = $.map(response, function(weatherData, index){
    return weatherData.temp.english;
  });
  return farenheitsArray;
}

//Based on GET request, identify the hours = labels for chart
function getHours(result){
  var response = result.hourly_forecast;
  var hoursArray = $.map(response, function(weatherData, index){
    return weatherData.FCTTIME.hour;
  });
  return hoursArray;
}

//labels = hours, data = farenheits
function generateDataSet(labels, data) {
  var chart = {
    "labels": labels,
    "datasets": [
      {"label": "Hourly Weather for New York",
      "fillColor": "rgba(220,220,220,0.2)",
      "strokeColor": "rgba(220,220,220,1)",
      "pointColor": "rgba(220,220,220,1)",
      "pointStrokeColor": "#fff",
      "pointHighlightFill": "#fff",
      "pointHighlightStroke": "rgba(220,220,220,1)",
      "data": data}
    ]
  };
  return chart;
}

//AJAX GET request
function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  $.ajax({
    url: endpoint,
    dataType: "jsonp",
    success: success,
  })
}
