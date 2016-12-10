function getFahrenheits(result){
  // Your code goes here
  var hourlyForecast = result["hourly_forecast"];
  fahrenheits = [];
  for(var i = 0, len = hourlyForecast.length; i < len; i++) {
    fahrenheits.push(hourlyForecast[i]["temp"]["english"]);
  }
  return fahrenheits;
}

function getHours(result){
  // Your code goes here
  var hourlyForecast = result["hourly_forecast"];
  hours = [];
  for(var i = 0, len = hourlyForecast.length; i < len; i++) {
    hours.push(hourlyForecast[i]["FCTTIME"]["hour"]);
  }
  return hours;
}

function generateDataSet(labels, data) {
  // Your code goes here
  var myData = {};
  myData.labels = labels;
  myData.datasets = [{
    label : 'Hourly Weather for New York',
    fillColor : 'rgba(220,220,220,0.2)',
    strokeColor : 'rgba(220,220,220,1)',
    pointColor : 'rgba(220,220,220,1)',
    pointStrokeColor : '#fff',
    pointHighlightFill : '#fff',
    pointHighlightStroke : 'rgba(220,220,220,1)',
    data: data
  }]
  return myData;
}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  $.ajax({
    url: endpoint,
    dataType: "jsonp",
    success: success
  })
}
